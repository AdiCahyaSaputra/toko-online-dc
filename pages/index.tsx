import {GetServerSideProps} from "next";
import Head from 'next/head';
import {useRouter} from "next/router";
import type { NextPage } from 'next';

import dataProducts from 'public/json/product.json';

import ProductCard from "components/ProductCard";
import ProductWrapper from "components/ProductWrapper";
import BasicLayout from "components/BasicLayout";
import HeadlineProduct from "components/HeadlineProduct";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = dataProducts;

  const getProducts = await fetch("https://toko-online-dc.herokuapp.com/api/v1/products");
  const { results: productsData } = await getProducts.json();

  return {
    props: {
      res,
      productsData
    }
  }
}

type HomeProps = {
  res: [
    {
      namaBarang: string,
      kategori: string,
      hargaAsli: string,
      hargaDiskon: string,
      gambar: string
    }
  ],

  productsData: Array<object>

}

const Home: NextPage<HomeProps> = ({ res, productsData }) => {
  const products: HomeProps['res'] = res;
  const Router = useRouter();

  function productDetailHandler(productName: string) {
    const product: string[] = productName.split(' ');
    Router.push(`/product/${product.join('-')}`);
  }

  return (
    <>
      <Head>
        <title>Toko Online</title>
      </Head>

      <BasicLayout>
        <HeadlineProduct/>
        <main className="bg-white pb-20">
          <ProductWrapper>
            {productsData.map((data: any) => (
              <ProductCard key={data.id} data={data} clickHandler={() => console.log("Hello")} />
            ))}
          </ProductWrapper>
        </main>
      </BasicLayout>
    </>
  )
}

export default Home;
