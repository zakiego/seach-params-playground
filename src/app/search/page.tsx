import { SearchInput } from "@/app/search/client";

interface Props {
	searchParams: {
		query?: string;
	};
}

import { z } from "zod";

const getData = async (query: string | undefined) => {
	const schema = z.object({
		products: z.array(
			z.object({
				id: z.number(),
				title: z.string(),
				description: z.string(),
				price: z.number(),
				discountPercentage: z.number(),
				rating: z.number(),
				stock: z.number(),
				brand: z.string(),
				category: z.string(),
				thumbnail: z.string(),
				images: z.array(z.string()),
			}),
		),
		total: z.number(),
		skip: z.number(),
		limit: z.number(),
	});

	const response = await fetch(
		`https://dummyjson.com/products/search?q=${query}&limit=10`,
	);

	const data = await response.json();

	return schema.parse(data);
};

export default async function Page(props: Props) {
	const { searchParams } = props;
	const { query } = searchParams;

	const data = await getData(query);

	return (
		<div>
			<div>
				<a
					className="text-blue-500 underline"
					href="https://github.com/zakiego/seach-params-playground"
				>
					Source code
				</a>
			</div>

			<div className="mb-2">Query: {query}</div>

			<SearchInput />

			<div className="grid grid-cols-2 gap-4">
				{data.products.map((product) => (
					<div
						key={product.id}
						className="rounded-md border border-gray-300 p-4 my-4"
					>
						<h2 className="text-xl">{product.title}</h2>
						<p className="text-gray-500">Category: {product.category}</p>
						<img
							className="rounded-md w-48 h-48 object-cover"
							src={product.thumbnail}
							alt={product.title}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
