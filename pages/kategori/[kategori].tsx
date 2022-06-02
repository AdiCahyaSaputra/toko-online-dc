import BasicLayout from "components/BasicLayout";
import CategoryBar from "components/CategoryBar";
import HeadlineProduct from "components/HeadlineProduct";
import ProductCard from "components/ProductCard";
import ProductWrapper from "components/ProductWrapper";

import {GetServerSideProps} from "next";
import Head from "next/head";
import { useRouter } from "next/router";

import dataProducts from 'public/json/product.json';

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { kategori } = ctx.query;
  const products = dataProducts.filter((product) => {
    if(product.kategori.toLowerCase() === kategori) return product;
  });

  return {
    props: {
      products,
      kategori
    }
  }
}

export default function Kategori({ products, kategori }: any) {
  const router = useRouter();

  function productDetailHandler(namaBarang: string) {
    namaBarang.toLowerCase();
    router.push(`/product/${namaBarang}`);
  }

  return (
    <>
      <Head>
        <title>Toko Online | { kategori }</title>
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
