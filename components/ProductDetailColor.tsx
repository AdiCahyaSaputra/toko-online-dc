import { useEffect, useState } from "react";

export default function ProductDetailColor() {
	const colors: string[] = ["bg-purple-700 shadow-purple-700/30", "bg-white shadow-white/30", "bg-blue-600 shadow-blue-600/30", "bg-red-600 shadow-red-600/30"];
	const [colorActive, setColorActive] = useState("bg-purple-700 shadow-purple-700/30");
	const [isLoadColor, setIsLoadColor] = useState(true);

	useEffect(() => {
		setTimeout(() => setIsLoadColor(false), 500);
	}, [])

	const classWhenColorActive = 'p-4 shadow-md';
	const classColorDefault = 'p-3 shadow-sm outline outline-offset-4 outline-gray-400';

	return (
		<>
			<nav className="mt-4 p-2 flex items-center space-x-6">
				{colors.map(color => ( <>
					<div key={color} onClick={() => setColorActive(color)} className={`${isLoadColor && 'scale-75'} transition-all duration-200 ease-in-out w-max rounded-full ${color} ${colorActive === color ? classWhenColorActive : classColorDefault} border border-gray-200`}></div> 
				</>
				))}
			</nav>
		</>
	)
}
