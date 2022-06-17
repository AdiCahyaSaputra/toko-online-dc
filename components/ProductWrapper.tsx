import Layout from "components/Layout";

interface ProductWrapperProps {
	children: React.ReactNode
}

const ProductWrapper: React.FC<ProductWrapperProps> = ({ children }) => {
	return (
		<Layout>
			<div className="grid grid-cols-12 gap-4">
				{ children }
			</div>
		</Layout>
	)
}

export default ProductWrapper;
