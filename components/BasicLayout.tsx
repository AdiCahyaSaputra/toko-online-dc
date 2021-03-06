import Navbar from 'components/Navbar';
import HeaderLayout from 'components/HeaderLayout';
	
import { useState } from 'react';

type BasicLayoutProps = {
	children: React.ReactNode,
}

const BasicLayout: React.FC<BasicLayoutProps> = ({ children }) => {
	const [active, setActive] = useState<boolean>(false);

  function changeActiveFromChild(stateFromChild: boolean): void {
    setActive(stateFromChild);
  }

	return (
		<>
			{active && (
				<div className='fixed z-40 transition-all duration-75 ease-in-out inset-0 bg-black/40'></div>
			)}

			<main className="bg-blue-700 overflow-hidden">
				<HeaderLayout />
				<Navbar isActive={active} changeActiveFromChild={changeActiveFromChild}/> 
				{ children }
			</main>
		</>
	)
}

export default BasicLayout;
