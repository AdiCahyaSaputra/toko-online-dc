import {useEffect, useState} from "react";

export default function ProductDetailSize() {
	const sizes: string[] = ["sm", "md", "lg", "xl", "2xl"];
	const [sizeActive, setSizeActive] = useState("sm");
	const [isLoadSize, setIsLoadSize] = useState(true);

	useEffect(() => {
		setTimeout(() => setIsLoadSize(false), 500);
	},[])

	const classWhenSizeActive = "bg-white/30";

	return (
		<nav className={`${isLoadSize && 'animate-pulse'} rounded-full bg-blue-600 md:p-1 p-2 flex justify-between md:justify-around md:w-max items-center md:space-x-4`}>
			{sizes.map(size => (
				<div key={size} onClick={() => setSizeActive(size)} className={`${isLoadSize && 'h-5'} md:text-sm py-1.5 transition-all duration-150 hover:bg-white/30 px-4 rounded-full ${sizeActive === size && classWhenSizeActive} text-center text-white font-medium`}>{ !isLoadSize && size }</div>
			))}
		</nav>
	)
}
