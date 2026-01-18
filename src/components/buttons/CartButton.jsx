"use client";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import Swal from "sweetalert2";

const CartButton = ({ product }) => {
	const islogin = true;
	const path = usePathname();
	const router = useRouter();
	const [isLoading, setIsLoading] = useState(false);

	const handleAdd2Cart = async () => {
		setIsLoading(true);
		if (islogin) {
			const result = await handleCart(product._id);
			if (result.success) {
				Swal.fire({
					title: "Added to Cart",
					text: `${product.title} কার্টে যুক্ত করা হয়েছে`,
					icon: "success",
					showCancelButton: true,
					confirmButtonColor: "#3085d6",
					cancelButtonColor: "#d33",
					cancelButtonText: "আরো কিনতে চাই",
					confirmButtonText: "চেকআউট করুন",
				}).then((res) => {
					if (res.isConfirmed) router.push("/cart");
				});
				// Swal.fire("Added to Cart", product?.title, "success");
			} else {
				Swal.fire("Opps", "Something Wrong Happen", "error");
			}
			setIsLoading(false);
		} else {
			router.push(`/login?callbackUrl=${path}`);
			setIsLoading(false);
		}
	};

	return (
		<div>
			<button className="btn btn-primary w-full flex gap-2">
				<FaCartPlus />
				Add to Cart
			</button>
		</div>
	);
};

export default CartButton;
