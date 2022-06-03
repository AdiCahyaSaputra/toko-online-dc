import BasicLayout from "components/BasicLayout";
import Layout from "components/Layout";

import { GetServerSideProps } from "next"
import Head from "next/head";
import Image from 'next/image';

import dataProduct from 'public/json/product.json';
import {useState} from "react";

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { product } = ctx.query;
	const thisProduct = dataProduct.filter(el => {
		let { namaBarang }: any = el;
		namaBarang = namaBarang.toLowerCase();
		namaBarang = namaBarang.split(' ');
		namaBarang = namaBarang.join('-');


		console.log(namaBarang);
		console.log(product);

		if(product === namaBarang) return el;

	});

	return {
		props: {
			thisProduct
		}
	}
}

export default function Product({ thisProduct }: any) {
	const colors: string[] = ["bg-purple-700 shadow-purple-700/30", "bg-white shadow-white/30", "bg-blue-600 shadow-blue-600/30", "bg-red-600 shadow-red-600/30"];
	const sizes: string[] = ["sm", "md", "lg", "xl", "2xl"];

	const [colorActive, setColorActive] = useState("bg-purple-700 shadow-purple-700/30");
	const [sizeActive, setSizeActive] = useState("sm");
	
	const classWhenColorActive = 'p-4 shadow-md';
	const classColorDefault = 'p-3 shadow-sm outline outline-offset-4 outline-gray-400';

	const classWhenSizeActive = "bg-white/30 backdrop-blur-md shadow-white/30 shadow-md";

	return (
		<>
			<Head>
				<title>Produk | { thisProduct[0].namaBarang }</title>
			</Head>

			<BasicLayout>
				<main className="bg-white relative">
					<Layout>
						<header className="grid grid-cols-12 gap-4">
							<div className="rounded-md col-span-12 aspect-video bg-gray-400"></div>
							<div className="col-span-12 flex items-center space-x-3">
								<h3 className="py-1.5 px-4 bg-red-600 font-bold shadow-red-600/30 shadow-md rounded-md text-white w-max">{ thisProduct[0].kategori }</h3>
								<div>
									<h1 className="text-2xl font-bold line-clamp-1">{ thisProduct[0].namaBarang } </h1>
									<div className="flex items-center space-x-2">
										<p className="text-sm text-red-600 line-through">Rp.{ thisProduct[0].hargaAsli }</p>
										<p className="text-sm font-bold text-gray-500">Rp.{ thisProduct[0].hargaDiskon }</p>
									</div>
								</div>
							</div>
						</header>
					</Layout>
					<hr className="my-3"/>
					<Layout>
						<nav className="rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-2 flex justify-between items-center">
							{sizes.map(size => (
								<div key={size} onClick={() => setSizeActive(size)} className={`py-1.5 transition-all duration-150 hover:bg-white/30 px-4 rounded-full ${sizeActive === size && classWhenSizeActive} text-center text-white font-medium`}>{ size }</div>
							))}
						</nav>
						<nav className="mt-4 p-2 flex items-center space-x-6">
							{colors.map(color => ( <>
								<div key={color} onClick={() => setColorActive(color)} className={`transition-all duration-200 ease-in-out w-max rounded-full ${color} ${colorActive === color ? classWhenColorActive : classColorDefault} border border-gray-200`}></div> 
							</>
							))}
						</nav>
					</Layout>

					<div className="fixed bottom-0 inset-x-0 flex items-center space-x-2 p-2 border border-gray-200">
						<div className="flex justify-center space-x-3 items-center hover:shadow-red-600/30 hover:shadow-md hover:font-light transition-all duration-100 ease-in-out py-3 px-4 bg-red-600 text-white w-7/12 font-bold rounded-md text-sm">
								<Image
									src="/icons/shopping-cart.svg"
									width={20}
									height={20}
								/>
							<p>
								Tambah Ke Keranjang
							</p>
						</div>
						<div className="flex justify-center space-x-3 items-center hover:shadow-blue-600/30 hover:shadow-md hover:font-light transition-all duration-100 ease-in-out py-3 px-4 bg-blue-600 text-white w-5/12 font-bold rounded-md text-sm">
								<Image
									src="/icons/shopping-bag.svg"
									width={20}
									height={20}
								/>
							<p>
								Beli Sekarang
							</p>
						</div>
					</div>
				</main>
			</BasicLayout>
		</>
	)
}

