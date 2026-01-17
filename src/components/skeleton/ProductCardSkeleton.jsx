const ProductCardSkeleton = () => {
	return (
		<div className="card bg-base-100 shadow-md border p-3 rounded-lg">
			<div className="h-48 w-full skeleton mb-3"></div>

			<div className="card-body p-4">
				<div className="skeleton h-4 w-3/4"></div>
				<div className="skeleton h-4 w-1/2 mt-2"></div>

				<div className="skeleton h-4 w-1/3 mt-4"></div>
				<div className="skeleton h-4 w-1/4 mt-2"></div>

				<div className="skeleton h-10 w-full rounded-md mt-4"></div>
			</div>
		</div>
	);
};

export default ProductCardSkeleton;
