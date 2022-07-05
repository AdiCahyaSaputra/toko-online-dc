type LayoutProps = {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="w-full md:w-10/12 lg:w-8/12 mx-auto p-4">
			{ children }
		</div>
	)
}

export default Layout;
