import { GetServerSideProps } from "next";
import Head from 'next/head';
import {useRouter} from "next/router";

import dataProducts from 'public/json/product.json';

import ProductCard from 'components/ProductCard';
import ProductWrapper from 'components/ProductWrapper';
import BasicLayout from "components/BasicLayout";
import HeadlineProduct from "components/HeadlineProduct";
import CategoryBar from "components/CategoryBar";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const res = dataProducts;
  console.log(res);

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
    productName.toLowerCase();
    Router.push(`/product/${productName}`);
  }

  return (
    <>
      <Head>
        <title>Toko Online</title>
      </Head>

      <BasicLayout headlineProduct={ <HeadlineProduct/> } categoryBar={ <CategoryBar/> }>
        <main className="bg-white pb-20">
          <ProductWrapper>
            {products.map(({hargaAsli, hargaDiskon, namaBarang, kategori}: any) => (
              <ProductCard clickHandler={() => productDetailHandler(namaBarang)} hargaAsli={hargaAsli} hargaDiskon={hargaDiskon} namaBarang={namaBarang} kategori={kategori}/>
            ))}
          </ProductWrapper>
        </main>
      </BasicLayout>
    </>
  )
}
