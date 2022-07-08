import { ProductInterface } from "interface/ProductInterface";
import {MouseEventHandler, useEffect, useState} from "react";

import Image from 'next/image';

type ProductCardProps = {
	clickHandler: MouseEventHandler,
	data: ProductInterface
}

const ProductCard: React.FC<ProductCardProps> = ({clickHandler, data}) => {
	const [status, setStatus] = useState(103);

	useEffect(() => {
		setTimeout(() => {
			setStatus(200);
			console.log(data.image);
		}, 500);

		return () => {
			clearTimeout();
		}
	}, []);

	return (
		<div onClick={clickHandler} className="shadow-md group transition-all duration-150 hover:bg-blue-600 hover:text-white overflow-hidden col-span-6 bg-white md:col-span-3 rounded-md">
			<div className="w-full blur overflow-hidden relative aspect-video bg-blue-600/30 group-hover:bg-white/40 rounded-t-md">
				<Image src={data.image} layout="fill" objectFit="cover" alt={data.name} />
			</div>
			<div className="p-3 h-full mt-4">
				<div>
					<h1 className={`text-gray-700 line-clamp-1 font-bold text-lg group-hover:text-white ${ status != 200 && 'animate-pulse p-2 rounded-sm bg-gray-100' }`}>{ status === 200 && data.name }</h1>
				</div>
				<div className="mt-4 space-y-2 flex flex-col justify-between">
					<p className={`${status != 200 && 'p-2 bg-gray-100 w-[25%] my-2 rounded-sm animate-pulse'} group-hover:text-white/70 tracking-wide text-xs text-gray-500 line-clamp-2`}>{ status == 200 && data.description }</p>
					<h4 className={`font-extrabold ${status != 200 && 'animate-pulse p-1.5 bg-gray-700 rounded-sm w-[50%]'}`}>{ status == 200 && 'Rp.' + data.price.toLocaleString() }</h4>
				</div>
			</div>
		</div>
	)
}

export default ProductCard;
