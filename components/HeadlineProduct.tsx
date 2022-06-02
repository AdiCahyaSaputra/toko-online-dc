import {useEffect, useState} from "react";

export default function HeadlineProduct() {
	const [classTagLine, setClassTagline] = useState("-bottom-20");
	const [animatePop, setAnimatePop] = useState("-scale-50")
	useEffect(() => {
		setTimeout(() => {
			setClassTagline("bottom-0");
			setAnimatePop("scale-100");
		}, 300);
	}, []);

	return (
		<div className="w-full h-96 space-x-4 flex justify-center items-center">
			<div className="text-white">
				<h1 className="text-5xl font-bold">
					Selamat <br/>
				</h1>
				<div className="relative w-max">
					<div className={`absolute top-0 transition-all border-t-4 border-l-4 border-sky-400 duration-500 ${animatePop} rounded-full -right-2 w-10 h-10 bg-white`}></div>
					<div className="inline-block font-light text-5xl my-4 py-2 px-4 bg-sky-400/30 shadow-md backdrop-blur-sm rounded-md">
						Berbelanja
					</div>
				</div>
				<div className="flex overflow-hidden items-center space-x-4">
					<p className={`font-bold text-lg relative hover:-top-1 transition-all duration-200 ${classTagLine}`}>Murah</p>
					<p className={`font-bold text-lg relative hover:-top-1 transition-all duration-300 ${classTagLine}`}>Berkualitas</p>
					<p className={`font-bold text-lg relative hover:-top-1 transition-all duration-500 ${classTagLine}`}>Asli</p>
				</div>
			</div>
		</div>
	)
}
