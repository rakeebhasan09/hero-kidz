"use client";

import Image from "next/image";
import Link from "next/link";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
	const { _id, title, image, price, ratings, reviews, sold } = product || {};

	return (
		<div className="card bg-base-100 shadow-md hover:shadow-xl duration-300 border rounded-lg">
			<figure className="relative h-48 w-full">
				<Image
					src={image}
					alt={title}
					width={400}
					height={200}
					className="object-contain p-4 w-full"
				/>
			</figure>

			<div className="card-body p-4">
				<h2 className="card-title text-base font-semibold line-clamp-2">
					{title}
				</h2>

				<div className="flex items-center gap-2 text-sm mt-1">
					<FaStar className="text-yellow-500" />
					<span>{ratings}</span>
					<span className="opacity-60">({reviews} reviews)</span>
				</div>

				<div className="flex justify-between items-center mt-2">
					<p className="text-lg font-bold text-primary">{price}৳</p>
					<p className="text-sm opacity-70">Sold: {sold}</p>
				</div>

				<button className="btn btn-primary btn-sm mt-3 w-full">
					Add to Cart
				</button>
				<Link
					href={`/products/${_id}`}
					className="btn btn-primary btn-sm mt-3 w-full"
				>
					View Details
				</Link>
			</div>
		</div>
	);
};

export default ProductCard;
