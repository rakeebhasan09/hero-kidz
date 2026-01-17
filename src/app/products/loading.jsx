import ProductCardSkeleton from "@/components/skeleton/ProductCardSkeleton";
import React from "react";

const loading = () => {
	return (
		<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
			{[...Array(9)].map((_, index) => (
				<ProductCardSkeleton key={index} />
			))}
		</div>
	);
};

export default loading;
