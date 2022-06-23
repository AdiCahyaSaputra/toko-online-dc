import BasicLayout from "components/BasicLayout";
import { ProductContext } from 'context/ProductContext';

import { GetServerSideProps } from "next"
import Head from "next/head";

import dataProduct from 'public/json/product.json';
import ProductDetail from "components/ProductDetail";
import ProductModalCart from "components/ProductModalCart";
import {useState} from "react";

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
	const [productModalData, setProductModalData] = useState({
		namaBarang: thisProduct[0].namaBarang,
		kategori: thisProduct[0].kategori,
		hargaDiskon: thisProduct[0].hargaDiskon,
		warna: "bg-purple-700 shadow-purle-700/30 text-white",
		ukuran: "Sm",
	});

	const [addToCart, setAddToCart] = useState(false);

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

