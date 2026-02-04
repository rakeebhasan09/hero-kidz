"use client";

import { useMemo, useState } from "react";
import CartItem from "../cards/CartItem";
import Link from "next/link";

const Cart = ({ cartItem = [] }) => {
	const [items, setItems] = useState(cartItem);
	const totalItems = useMemo(
		() => items.reduce((sum, item) => sum + item.quantity, 0),
		[items],
	);

	const totalPrice = useMemo(
		() => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
		[items],
	);

	// Delete From Cart
	const removeItem = (id) => {
		setItems((pervItems) => pervItems.filter((item) => item._id != id));
	};

	// Update Quantity
	const updateQuantity = (id, q) => {
		setItems((prevItems) =>
			prevItems.map((item) =>
				item._id === id
					? {
							...item,
							quantity: q,
						}
					: item,
			),
		);
	};
	return (
		<div>
			<p className="py-3">
				<span className="text-primary font-bold">{items.length}</span>
				Items Found in the Cart
			</p>
			<div className="flex gap-4">
				<div className="flex-3 space-y-5 pb-20">
					{items.map((item) => (
						<CartItem
							key={item._id}
							item={item}
							removeItem={removeItem}
							updateQuantity={updateQuantity}
						/>
					))}
				</div>
				<div className="flex-1">
					<div className="card bg-base-100 shadow-lg p-5 sticky top-24">
						<h2 className="text-lg font-semibold mb-4">
							Order Summary
						</h2>

						{/* Product List */}
						<div className="space-y-3  overflow-y-auto">
							{items.map((item) => (
								<div
									key={item._id}
									className="flex justify-between items-start text-sm"
								>
									<div>
										<p className="font-medium line-clamp-1">
											{item.title}
										</p>
										<p className="text-gray-500">
											Qty: {item.quantity}
										</p>
									</div>

									<p className="font-semibold">
										৳ {item.price * item.quantity}
									</p>
								</div>
							))}
						</div>

						<hr className="my-4" />

						{/* Totals */}
						<div className="space-y-2 text-sm">
							<div className="flex justify-between">
								<span>Total Items</span>
								<span>{totalItems}</span>
							</div>

							<div className="flex justify-between font-semibold text-base">
								<span>Total Price</span>
								<span>৳ {totalPrice}</span>
							</div>
						</div>

						{/* Confirm Button */}
						<Link
							href={"/checkout"}
							disabled={items.length === 0}
							className="btn btn-primary w-full mt-5"
						>
							Confirm Order
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
