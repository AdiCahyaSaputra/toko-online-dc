import { useRouter } from "next/router"

const HeaderLayout: React.FC = () => {

	const router = useRouter();

	return (
		<header onClick={() => router.push('/')} className="cursor-pointer text-white z-50 relative space-x-2 p-2 bg-blue-700 flex justify-center items-center">
			<h1 className="font-bold">
				Toko Online
			</h1>
			<p className="text-gray-300 text-sm">
				Komunitas Discord
			</p>
		</header>
	)
}

export default HeaderLayout;
