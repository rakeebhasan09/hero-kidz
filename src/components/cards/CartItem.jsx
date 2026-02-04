"use client";

import { deleteItemsFromCart } from "@/actions/server/cart";
import Image from "next/image";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";

const CartItem = ({ item, onIncrease, onDecrease }) => {
	const handleDeleteCart = () => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then(async (result) => {
			if (result.isConfirmed) {
				const result = await deleteItemsFromCart(item._id);
				if (result.success) {
					Swal.fire({
						title: "Deleted!",
						text: "Your file has been deleted.",
						icon: "success",
					});
				} else {
					Swal.fire({
						title: "Opss!",
						text: "Something went wrong.",
						icon: "error",
					});
				}
			}
		});
	};
	return (
		<div className="card card-side bg-base-100 shadow-md p-4 gap-4">
			{/* Image */}
			<div className="relative w-24 h-24">
				<Image
					src={item.image}
					alt={item.title}
					fill
					className="object-cover rounded-lg"
				/>
			</div>

			{/* Info */}
			<div className="flex-1 flex flex-col justify-between">
				<div>
					<h2 className="font-semibold text-base">{item.title}</h2>
					<p className="text-sm text-gray-500">৳ {item.price}</p>
				</div>

				{/* Quantity Controls */}
				<div className="flex items-center gap-3 mt-2">
					<button
						onClick={() => onDecrease(item._id)}
						className="btn btn-xs btn-outline"
					>
						<FaMinus />
					</button>

					<span className="font-medium">{item.quantity}</span>

					<button
						onClick={() => onIncrease(item._id)}
						className="btn btn-xs btn-outline"
					>
						<FaPlus />
					</button>
				</div>
			</div>

			{/* Remove Button */}
			<div className="flex flex-col justify-between items-end">
				<button
					onClick={handleDeleteCart}
					className="btn btn-sm btn-error btn-outline"
				>
					<FaTrash />
				</button>

				<p className="font-semibold">৳ {item.price * item.quantity}</p>
			</div>
		</div>
	);
};

export default CartItem;
