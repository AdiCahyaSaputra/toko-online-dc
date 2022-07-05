import {useProductContext} from "context/ProductContext"
import Image from "next/image"

type ProductModalCartProps = {
	productModalData: {
		kategori: string,
		namaBarang: string,
		hargaDiskon: string,
		ukuran: string,
		warna: string
	}
}
const ProductModalCart: React.FC<ProductModalCartProps> = ({ productModalData }) => {

	const context: any = useProductContext();

	return (
		<>
			<div className="absolute inset-0 z-30 flex flex-col justify-center items-center backdrop-blur-md bg-black/30">
				<div className="p-4 md:w-6/12 w-10/12 bg-white rounded-md">
					<header className="py-3 px-4 bg-red-600 rounded-md flex space-x-3 font-bold text-white">
						<Image src="/icons/shopping-cart.svg" width={24} height={24}/>
						<h1>Informasi Produk</h1>
					</header>
					<main className="mt-4 p-2 border border-gray-300 rounded-md">
						<div>
							<h1 className="text-lg font-bold">{ productModalData.namaBarang }</h1>
							<hr className="my-2"/>
							<div className="flex justify-between items-center">
								<p className="text-sm font-light">Rp.{ productModalData.hargaDiskon }</p>
								<div className="flex space-x-2 items-center">
									<p className="text-sm py-1 px-2 bg-blue-200 rounded-md text-blue-600 font-medium">{ productModalData.kategori }</p>
									<p className={`text-sm p-1.5 ${productModalData.warna} rounded-md font-bold`}>{ productModalData.ukuran }</p>
								</div>
							</div>
						</div>
					</main>
				</div>
				<div className="flex space-x-3 mt-4">
					<div onClick={() => context.setAddToCart(false)} className="py-2 cursor-pointer px-4 hover:shadow-md hover:shadow-red-600 hover:text-white/60 rounded-md bg-red-600 text-white font-bold">Batal</div>
					<div className="py-2 px-4 hover:shadow-md cursor-pointer hover:shadow-blue-600 hover:text-white/60 rounded-md bg-blue-600 text-white font-bold">Lanjutkan</div>
				</div>
			</div>
		</>
	)
}


export default ProductModalCart;
