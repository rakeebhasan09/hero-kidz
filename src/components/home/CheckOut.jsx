"use client";

import { createOrder } from "@/actions/server/Order";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";
import Swal from "sweetalert2";

const CheckOut = ({ cartItems }) => {
	const session = useSession();
	const router = useRouter();

	const totalItems = useMemo(
		() => cartItems.reduce((sum, item) => sum + item.quantity, 0),
		[cartItems],
	);

	const totalPrice = useMemo(
		() =>
			cartItems.reduce(
				(sum, item) => sum + item.price * item.quantity,
				0,
			),
		[cartItems],
	);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const form = e.target;
		const payload = {
			name: form.name.value,
			email: form.email.value,
			contact: form.mobile.value,
			address: form.deliveryInformation.value,
			instructions: form.specialInstruction.value,
		};

		const result = await createOrder(payload);
		if (result.success) {
			Swal.fire("success", "Order Submitted.", "success");
			router.push("/");
		} else {
			Swal.fire("error", "Something went wrong.", "error");
			router.push("/cart");
		}
	};

	if (session.status == "loading") {
		return <h2>Loading....</h2>;
	}
	return (
		<div className="py-10">
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
				{/* Checkout Form */}
				<div className="lg:col-span-2 bg-base-100 p-6 rounded-xl shadow">
					<h2 className="text-xl font-semibold mb-6">
						Delivery Information
					</h2>

					<form onSubmit={handleSubmit} className="space-y-5">
						{/* Name & Email */}
						<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
							<div className="form-control">
								<label className="label">
									<span className="label-text">Name</span>
								</label>
								<input
									type="text"
									placeholder="Your name"
									className="input input-bordered w-full"
									name="name"
									value={session?.data?.user?.name}
									// onChange={handleChange}
									readOnly
								/>
							</div>

							<div className="form-control">
								<label className="label">
									<span className="label-text">Email</span>
								</label>
								<input
									type="email"
									placeholder="Your email"
									className="input input-bordered w-full"
									name="email"
									value={session?.data?.user?.email}
									// onChange={handleChange}
									readOnly
								/>
							</div>
						</div>

						{/* Delivery Info */}
						<div className="form-control">
							<label className="label">
								<span className="label-text">
									Delivery Information
								</span>
							</label>
							<textarea
								rows={8}
								className="textarea textarea-bordered w-full"
								placeholder="Full delivery address"
								name="deliveryInformation"
								required
							></textarea>
						</div>

						{/* Special Instruction */}
						<div className="form-control">
							<label className="label">
								<span className="label-text">
									Special Instruction
								</span>
							</label>
							<textarea
								className="textarea textarea-bordered h-20 w-full"
								placeholder="Any special instruction"
								name="specialInstruction"
								required
							></textarea>
						</div>

						{/* Contact No */}
						<div className="form-control">
							<label className="label">
								<span className="label-text">Contact No</span>
							</label>
							<input
								type="text"
								placeholder="01XXXXXXXXX"
								className="input input-bordered w-full"
								name="mobile"
								required
							/>
						</div>

						<button className="btn btn-primary w-full mt-4">
							Place Order
						</button>
					</form>
				</div>

				{/* Order Summary */}
				<div className="bg-base-100 p-6 rounded-xl shadow h-fit">
					<h2 className="text-xl font-semibold mb-4">
						Order Summary
					</h2>

					<div className="space-y-3 text-sm">
						{cartItems.map((item, idx) => (
							<div
								key={idx}
								className="flex justify-between border-b pb-2"
							>
								<div>
									<p className="font-medium">{item.title}</p>
									<p className="text-gray-500">
										Qty: {item.quantity} × ৳{item.price}
									</p>
								</div>
								<span>৳{item.quantity * item.price}</span>
							</div>
						))}

						<div className="flex justify-between font-bold text-base pt-3">
							<span>Total ({totalItems} items)</span>
							<span>৳{totalPrice}</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CheckOut;
