import {useEffect, useState} from "react";

export default function CategoryBar() {
	const categories = ["Komputer", "Elektronik", "Sepatu", "Baju", "Kacamata"];
	const [classCategoryItem, setClassCategoryItem] = useState("-top-20");

	useEffect(() => {
		setTimeout(() => setClassCategoryItem("top-0"), 500);
	}, []);

	return (
		<div className="relative overflow-hidden">
			<div className={`absolute transition-all duration-400 delay-200 ${classCategoryItem} container mx-auto p-2 relative z-10`}>
				<div className="py-2 flex space-x-4 md:space-x-0 overflow-x-auto items-center text-white md:justify-around px-4 w-full bg-blue-600 shadow-md rounded">
					<a className="font-bold">Semua</a>
					{ categories.map(category => (
						<a href="">{ category }</a>
					)) }
				</div>
			</div>
			<div className="absolute inset-0 bg-white top-[50%]"></div>
		</div>
	)
}
