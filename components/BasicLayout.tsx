import Navbar from 'components/Navbar';
import HeaderLayout from 'components/HeaderLayout';
	
import { useState } from 'react';

interface BasicLayoutProps {
	children: React.ReactNode,
}

export default function BasicLayout({ children }: BasicLayoutProps) {
  const [active, setActive] = useState(false);

  function changeActiveFromChild(stateFromChild: boolean): void {
    setActive(stateFromChild);
  }

	return (
		<>
			{active && (
				<div className='fixed z-40 transition-all duration-75 ease-in-out inset-0 bg-white/30 backdrop-blur-sm'></div>
			)}

			<main className="bg-blue-700 overflow-hidden">
				<HeaderLayout />
				<Navbar isActive={active} changeActiveFromChild={changeActiveFromChild}/> 
				{ children }
			</main>
		</>
	)
}
