import Navbar from 'components/Navbar';
import HeaderLayout from 'components/HeaderLayout';
	
import { useState } from 'react';

export default function BasicLayout({ children, headlineProduct, categoryBar }: any) {
  const [active, setActive] = useState(false);

  function changeActiveFromChild(stateFromChild: boolean): void {
    setActive(stateFromChild);
  }

	return (
		<>
			{ active && (
				<div className='fixed z-40 transition-all duration-75 ease-in-out inset-0 bg-white/30 backdrop-blur-sm'></div>
			)}

			<header className="bg-blue-700 overflow-hidden">
				<HeaderLayout />
				<Navbar isActive={active} changeActiveFromChild={changeActiveFromChild}/> 
				{ headlineProduct ?? '' }
				{ categoryBar ?? '' }
			</header>
			
			{ children }
		</>
	)
}
