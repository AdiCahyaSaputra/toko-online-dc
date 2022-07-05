import BasicLayout from "components/BasicLayout";
import { ProductContext } from 'context/ProductContext';

import { GetServerSideProps } from "next"
import Head from "next/head";
import type { NextPage } from "next";

import dataProduct from 'public/json/product.json';
import ProductDetail from "components/ProductDetail";
import ProductModalCart from "components/ProductModalCart";
import {useState} from "react";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { product } = ctx.query;
	const thisProduct = dataProduct.filter(el => {
		let { namaBarang } = el;
		namaBarang = namaBarang.toLowerCase().split(' ').join('-');

		if(product === namaBarang) return el;

	});

	return {
		props: {
			thisProduct
		}
	}
}

type ProductProps = {
	thisProduct: [
		{
			namaBarang: string,
			kategori: string,
			hargaDiskon: string,
			hargaAsli: string,
			warna: string,
			ukuran: string
		}
	]
}

const Product: NextPage<ProductProps> = ({ thisProduct }) => {
	const [productModalData, setProductModalData] = useState<ProductProps['thisProduct'][0]>({
		namaBarang: thisProduct[0].namaBarang,
		kategori: thisProduct[0].kategori,
		hargaDiskon: thisProduct[0].hargaDiskon,
		hargaAsli: "",
		warna: "bg-purple-700 shadow-purle-700/30 text-white",
		ukuran: "Sm",
	});

	const [addToCart, setAddToCart] = useState<boolean>(false);

	const productSetter = {
		setColorFromChild(warna: string) {
			setProductModalData({
				...productModalData,
				warna
			});
		},
		setSizeFromChild(ukuran: string) {
			setProductModalData({
				...productModalData,
				ukuran
			});
		},

		setAddToCart(isActive: boolean) {
			setAddToCart(isActive);
		}
	}

	return (
		<>
			<Head>
				<title>Produk | { thisProduct[0].namaBarang }</title>
			</Head>
			<ProductContext.Provider value={productSetter}>
				{addToCart && (
					<ProductModalCart productModalData={ productModalData }/>
				)}
				<BasicLayout>
					<main className="bg-white relative">
						<ProductDetail thisProduct={ thisProduct }/>
					</main>
				</BasicLayout>
			</ProductContext.Provider>
		</>
	)
}

export default Product;
