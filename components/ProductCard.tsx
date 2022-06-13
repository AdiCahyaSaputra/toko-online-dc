import {useEffect, useState} from "react";

export default function ProductCard({clickHandler,keyId, gambar, hargaAsli, hargaDiskon, namaBarang, kategori }: any) {
	const [classCategoryCard, setClassCategoryCard] = useState("-translate-x-full");
	const [status, setStatus] = useState(103);

	useEffect(() => {
		setTimeout(() => {
			setClassCategoryCard('translate-x-0');
			setStatus(200);
		}, 500);
	}, []);

	return (
		<div key={keyId} onClick={clickHandler} className="shadow-md group transition-all duration-150 hover:bg-blue-600 hover:text-white overflow-hidden col-span-6 bg-white md:col-span-3 rounded-md">
			<div className="w-full aspect-video bg-blue-600/30 group-hover:bg-white/40 rounded-t-md"></div>
			<div className={`p-1.5 group-hover:bg-white/50 transition-all duration-150 ease-in-out font-bold text-xs bg-blue-700 shadow-md text-white ${classCategoryCard}`}>{ kategori }</div>
			<div className="p-3">
				<div>
					<h1 className={`text-gray-700 font-bold text-lg group-hover:text-white ${ status != 200 && 'animate-pulse p-2 rounded-sm bg-gray-100' }`}>{ status == 200 && namaBarang }</h1>
				</div>
				<div>
					<p className={`${status != 200 && 'p-2 bg-red-100 w-[25%] my-2 rounded-sm animate-pulse'} line-through shadow-red-600 text-xs text-red-500`}>{ status == 200 && 'Rp.' + hargaAsli }</p>
					<h4 className={`font-extrabold ${status != 200 && 'animate-pulse p-1.5 bg-gray-700 rounded-sm w-[50%]'}`}>{ status == 200 && 'Rp.' + hargaDiskon }</h4>
				</div>
			</div>
		</div>
	)
}
