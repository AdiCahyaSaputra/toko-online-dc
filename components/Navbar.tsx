import {useScrollPosition} from '@n8tb1t/use-scroll-position';
import Layout from 'components/Layout';
import Image from 'next/image';
import { useState } from 'react';

type NavbarProps = {
	isActive: boolean,
	changeActiveFromChild: Function
}

const Navbar: React.FC<NavbarProps> = ({isActive, changeActiveFromChild}) => {
	const [classNavbar, setClassNavbar] = useState<string>('relative');

	// Gini amat pengen bikin sticky navbar !1!1!1! 
	useScrollPosition(({prevPos,currPos}) => {

		if(currPos.y == 0) setClassNavbar('relative');
		prevPos.y > currPos.y && setClassNavbar('fixed top-0 shadow-blue-600/30 shadow-md');

	}, [classNavbar]);

	return (
		<>
			<nav className={`py-2 z-50 px-4 ${classNavbar} bg-blue-600 w-full text-white transition-all duration-150 ease-in-out`}>
				<Layout>
					<div className="flex space-x-4 justify-between items-center">

						<div className="w-full md:w-max">
							<form action="" method="get">
								<div className="w-full flex items-center bg-white rounded-full">
									<input type="text" className="peer bg-transparent py-2 px-4 rounded-full w-full outline-none text-gray-700" placeholder="Cari.." name="search" id="search"/>
									<div className="px-4 pt-1.5 peer-focus:opacity-100 opacity-50">
										<Image src="/icons/search.svg" width={24} height={24}/>
									</div>
								</div>
							</form>
						</div>

						<div className="relative md:flex md:items-center">
							<div onClick={() => changeActiveFromChild(!isActive)} className="md:order-last w-12 h-12 shadow-md hover:border-2 overflow-hidden hover:border-white bg-gray-200 rounded-full">
								<Image src="/profile/profile.jpg" priority width={100} height={100} />
							</div>

							<nav className={`
								md:order-first overflow-hidden shadow-md md:shadow-none md:space-x-2 md:static md:mr-8 md:flex transition-all duration-150 ease-in-out absolute ${isActive ? 'right-0' : '-right-60'} top-20 rounded-md bg-blue-600 text-white
							`}>
								
								<div className="hover:bg-white/20 md:rounded-md flex space-x-4 items-center w-52 md:w-max px-4 py-4">
									<Image src="/icons/user.svg" width={20} height={20} />
									<p className="font-medium text-sm">Profil</p>
								</div>

								<div className="hover:bg-white/20 md:rounded-md flex space-x-4 items-center w-52 md:w-max px-4 py-4">
									<Image src="/icons/shopping-cart.svg" width={20} height={20} />
									<p className="font-medium text-sm">Keranjang</p>
								</div>

							</nav>

							<div className={`
									hover:shadow-red-600/80 hover:backdrop-blur-md hover:bg-red-600/70 shadow-md group flex items-center w-52 absolute transition-all duration-300 ease-in-out md:top-20 ${isActive ? 'right-0' : 'md:-right-[calc(100% + 200px)] -right-96'} top-48 bg-red-600 p-4 rounded-md
								`}>
								<Image src="/icons/log-out.svg" width={20} height={20} />
								<p className='group-hover:font-bold ml-2 font-light text-sm'>Logout</p>
							</div> 

						</div>
					</div>
				</Layout>
			</nav>
		</>
	)
}


export default Navbar;
