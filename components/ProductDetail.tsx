import Layout from 'components/Layout';
import ProductDetailTitle from 'components/ProductDetailTitle';
import ProductDetailSize from 'components/ProductDetailSize';
import ProductDetailColor from 'components/ProductDetailColor';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import {useProductContext} from 'context/ProductContext';

type ProductDetailProps = {
	thisProduct: [
		{
			kategori: string,
			namaBarang: string,
			hargaAsli: string,
			hargaDiskon: string
		}
	]
}
const ProductDetail: React.FC<ProductDetailProps> = ({ thisProduct }) => {
	const [isLoadDetail, setIsLoadDetail] = useState(true);

	const context: any = useProductContext();

	useEffect(() => {
		setTimeout(() => setIsLoadDetail(false), 500);
	}, []);

	return (
		<>
			<Layout>
				<header className="md:pt-4 pb-24 md:pb-2 grid grid-cols-12 gap-4">
					<div className="md:col-span-5 rounded-md col-span-12 aspect-video bg-gray-400"></div>
					<div className="md:col-span-7 col-span-12">
						<ProductDetailTitle kategori={thisProduct[0].kategori} namaBarang={thisProduct[0].namaBarang} hargaDiskon={thisProduct[0].hargaDiskon} hargaAsli={thisProduct[0].hargaAsli}/>
						<hr className="my-3"/>
						<ProductDetailSize/>
						<ProductDetailColor/>
					</div>
				</header>
			</Layout>
			<div className="md:w-10/12 md:mx-auto">
				<div className={`${ isLoadDetail && '-bottom-full' } transition-all duration-200 ease-in-out fixed md:border-none md:relative bottom-0 inset-x-0 flex items-center space-x-2 p-2 border-t border-gray-200 rounded-t-md`}>
					<div onClick={() => context.setAddToCart(true)} className="cursor-pointer flex justify-center space-x-3 items-center hover:shadow-red-600/30 hover:shadow-md hover:font-light transition-all duration-100 ease-in-out py-3 px-4 bg-red-600 text-white w-7/12 font-bold rounded-md text-sm">
						<Image src="/icons/shopping-cart.svg" width={20} height={20} />
						<p>Tambah Ke Keranjang</p>
					</div>
					<div className="cursor-pointer flex justify-center space-x-3 items-center hover:shadow-blue-600/30 hover:shadow-md hover:font-light transition-all duration-100 ease-in-out py-3 px-4 bg-blue-600 text-white w-5/12 font-bold rounded-md text-sm">
						<Image src="/icons/shopping-bag.svg" width={20} height={20} />
						<p>Beli Sekarang</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductDetail;
