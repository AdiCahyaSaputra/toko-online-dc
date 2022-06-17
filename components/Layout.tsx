
interface LayoutProps {
	children: React.ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<div className="container mx-auto p-4">
			{ children }
		</div>
	)
}

export default Layout;
