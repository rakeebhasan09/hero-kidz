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
		alert("Product ID");
	};

	return (
		<div>
			<button
				onClick={handleAdd2Cart}
				className="btn btn-primary w-full flex gap-2"
			>
				<FaCartPlus />
				Add to Cart
			</button>
		</div>
	);
};

export default CartButton;
