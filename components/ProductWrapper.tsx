import Layout from "components/Layout";

export default function ProductWrapper({ children }: any) {
	return (
		<Layout>
			<div className="grid grid-cols-12 gap-4">
				{ children }
			</div>
		</Layout>
	)
}
