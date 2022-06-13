import {GetServerSideProps} from "next";
import Head from 'next/head';
import {useRouter} from "next/router";

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

export default function Home({ res }: any) {
  const products = res;
  const Router = useRouter();

  function productDetailHandler(productName: string) {
    let product: any = productName.split(' ');
    product = product.join('-');
    Router.push(`/product/${product}`);
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
            {products.map(({hargaAsli, hargaDiskon, namaBarang, kategori}: any) => (
              <ProductCard keyId={Math.round(Math.random())} clickHandler={() => productDetailHandler(namaBarang.toLowerCase())} hargaAsli={hargaAsli} hargaDiskon={hargaDiskon} namaBarang={namaBarang} kategori={kategori}/>
            ))}
          </ProductWrapper>
        </main>
      </BasicLayout>
    </>
  )
}
