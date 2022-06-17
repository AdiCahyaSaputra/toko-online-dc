import { useEffect, useState } from "react";

interface ProductDetailTitleProps {
	kategori: string,
	namaBarang: string,
	hargaAsli: string,
	hargaDiskon: string,
}

const ProductDetailTitle: React.FC<ProductDetailTitleProps> = ({ kategori, namaBarang, hargaAsli, hargaDiskon }) => {
	const [isLoadTitle, setIsLoadTitle] = useState<boolean>(true);
	
	useEffect(() => {
		setTimeout(() => setIsLoadTitle(false), 500);
	}, []);

	return (
		<>
			<div className="flex items-center md:items-start">
				<h3 className={`${isLoadTitle && 'h-10 bg-blue-500 animate-pulse w-5/12 rounded-md'} md:py-1 md:ml-4 md:order-last py-1.5 px-4 bg-blue-600 font-bold shadow-blue-600/30 shadow-md rounded-md text-white w-max`}>{ !isLoadTitle && kategori }</h3>
				<div className="ml-3 md:ml-0 md:order-first w-full">
					<h1 className={`${ isLoadTitle && 'p-2 bg-gray-400 w-10/12 h-8 rounded-md animate-pulse' } text-2xl font-bold line-clamp-1`}>{ !isLoadTitle && namaBarang } </h1>
					<div className="flex items-center space-x-2">
						<p className={`${ isLoadTitle && 'mt-1 rounded-md animate-pulse p-2 bg-red-400 w-3/12 h-4' } text-sm text-red-600 line-through`}>{ !isLoadTitle && 'Rp.' + hargaAsli }</p>
						<p className={`${ isLoadTitle && 'mt-1 rounded-md animate-pulse p-2 bg-gray-700 w-3/12 h-4' } text-sm font-bold text-gray-500`}>{ !isLoadTitle && 'Rp.' + hargaDiskon }</p>
					</div>
				</div>
			</div>
		</>
	)
}

export default ProductDetailTitle;
