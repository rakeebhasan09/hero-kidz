import React from "react";
import ProductCard from "../cards/ProductCard";
import { getProducts } from "@/actions/server/product";

const Products = async () => {
	const products = (await getProducts()) || [];
	return (
		<div>
			<h2 className="text-center text-4xl font-bold mb-10">
				Our Products
			</h2>

			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
				{products.map((product) => (
					<ProductCard
						key={product.title}
						product={{ ...product, _id: product._id.toString() }}
					/>
				))}
			</div>
		</div>
	);
};

export default Products;
