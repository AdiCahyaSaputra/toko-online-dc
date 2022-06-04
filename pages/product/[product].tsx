import BasicLayout from "components/BasicLayout";

import { GetServerSideProps } from "next"
import Head from "next/head";

import dataProduct from 'public/json/product.json';
import ProductDetail from "components/ProductDetail";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { product } = ctx.query;
	const thisProduct = dataProduct.filter(el => {
		let { namaBarang }: any = el;
		namaBarang = namaBarang.toLowerCase();
		namaBarang = namaBarang.split(' ');
		namaBarang = namaBarang.join('-');

		if(product === namaBarang) return el;

	});

	return {
		props: {
			thisProduct
		}
	}
}

export default function Product({ thisProduct }: any) {

	return (
		<>
			<Head>
				<title>Produk | { thisProduct[0].namaBarang }</title>
			</Head>

			<BasicLayout>
				<main className="bg-white relative">
					<ProductDetail thisProduct={ thisProduct }/>
				</main>
			</BasicLayout>
		</>
	)
}

