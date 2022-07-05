import {GetServerSideProps} from "next";
import Head from 'next/head';
import {useRouter} from "next/router";
import type { NextPage } from 'next';

import dataProducts from 'public/json/product.json';

import ProductCard from "components/ProductCard";
import ProductWrapper from "components/ProductWrapper";
import BasicLayout from "components/BasicLayout";
import CategoryBar from "components/CategoryBar";
import HeadlineProduct from "components/HeadlineProduct";

export const getServerSideProps: GetServerSideProps = async () => {
  const res = dataProducts;

  return {
    props: {
      res
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
  ]

}

const Home: NextPage<HomeProps> = ({ res }) => {
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
        <CategoryBar/>
        <main className="bg-white pb-20">
          <ProductWrapper>
            {products.map(({hargaAsli, hargaDiskon, namaBarang, kategori}, index) => (
              <ProductCard keyId={index} clickHandler={() => productDetailHandler(namaBarang.toLowerCase())} hargaAsli={hargaAsli} hargaDiskon={hargaDiskon} namaBarang={namaBarang} kategori={kategori} gambar={"Test"}/>
            ))}
          </ProductWrapper>
        </main>
      </BasicLayout>
    </>
  )
}

export default Home;
