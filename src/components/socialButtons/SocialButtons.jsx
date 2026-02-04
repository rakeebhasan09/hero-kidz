"use client";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";

const SocialButtons = () => {
	const params = useSearchParams();

	const hangleSocialLogin = async () => {
		const result = await signIn("google", {
			// redirect: false,
			callbackUrl: params.get("callbackUrl") || "/",
		});

		if (result.ok) {
			Swal.fire("susscess", "Welcome", "success");
		} else {
			Swal.fire("error", "Ops something went wrong.", "error");
		}
	};
	return (
		<div>
			{/* Google Login */}
			<button
				onClick={hangleSocialLogin}
				className="btn btn-outline w-full flex items-center gap-2"
			>
				<FcGoogle className="text-2xl" />
				Login with Google
			</button>
		</div>
	);
};

export default SocialButtons;
