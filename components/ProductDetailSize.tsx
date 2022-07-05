import {useProductContext} from "context/ProductContext";
import {useEffect, useState} from "react";

const ProductDetailSize: React.FC = () => {
	const sizes: string[] = ["sm", "md", "lg", "xl", "2xl"];
	const [sizeActive, setSizeActive] = useState<string>("sm");
	const [isLoadSize, setIsLoadSize] = useState<boolean>(true);

	useEffect(() => {
		setTimeout(() => setIsLoadSize(false), 500);

		return () => {
			clearTimeout();
		}
	},[])

	const context: any = useProductContext();
	useEffect(() => context.setSizeFromChild(sizeActive), [sizeActive]);

	const classWhenSizeActive = "bg-white/30";

	return (
		<nav className={`${isLoadSize && 'animate-pulse'} rounded-full bg-blue-600 md:p-1 p-2 flex justify-between md:justify-around md:w-max items-center md:space-x-4`}>
			{sizes.map((size, index) => (
				<div key={index} onClick={() => setSizeActive(size)} className={`${isLoadSize && 'h-5'} cursor-pointer md:text-sm py-1.5 transition-all duration-150 hover:bg-white/30 px-4 rounded-full ${sizeActive === size && classWhenSizeActive} text-center text-white font-medium`}>{ !isLoadSize && size }</div>
			))}
		</nav>
	)
}

export default ProductDetailSize;
