import {useEffect, useState} from "react";
import {useRouter} from "next/router";

const CategoryBar: React.FC = () => {
	const categories: string[] = ["Komputer", "Elektronik", "Sepatu", "Pakaian", "Kacamata"];
	const [classCategoryItem, setClassCategoryItem] = useState<string>("-top-20");

	const router = useRouter();
	
	function categoryBarHandler(url: string) {
		router.push(url);
	}

	useEffect(() => {
		setTimeout(() => setClassCategoryItem("top-0"), 500);
		return () => {
			clearTimeout();
		}
	}, []);

	return (
		<div className="relative overflow-hidden">
			<div className={`absolute transition-all duration-400 delay-200 ${classCategoryItem} container mx-auto p-2 relative z-10`}>
				<div className="py-2 flex no-scrollbar space-x-4 md:space-x-0 overflow-x-auto items-center text-white md:justify-around px-4 w-full bg-blue-600 shadow-md rounded">
					<a onClick={() => categoryBarHandler('/')} className={`${router.asPath == '/' ? 'font-bold' : 'hover:font-bold font-light'} cursor-pointer`}>Semua</a>
					{categories.map((category, index) => (
						<a key={index} onClick={() => categoryBarHandler(`/kategori/${category.toLowerCase()}`)} className={`${router.asPath == `/kategori/${category.toLowerCase()}` ? 'font-bold' : 'hover:font-bold font-light'} cursor-pointer`}>{ category }</a>
					))}
				</div>
			</div>
			<div className="absolute inset-0 bg-white top-[50%]"></div>
		</div>
	)
}

export default CategoryBar;
