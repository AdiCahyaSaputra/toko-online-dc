import { GetServerSideProps } from "next"

type ProductProps = {
	product: string
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
	const { product } = ctx.query;

	return {
		props: {
			product
		}
	}
}

export default function Product({ product }: ProductProps) {
	return (
		<article>

		</article>
	)
}

