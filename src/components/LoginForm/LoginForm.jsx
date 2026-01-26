"use client";

import { signIn } from "next-auth/react";
import { useState } from "react";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEyeOff, IoEye } from "react-icons/io5";
import Link from "next/link";
import Swal from "sweetalert2";
import SocialButtons from "../socialButtons/SocialButtons";
import { useSearchParams } from "next/navigation";

export default function LoginForm() {
	const params = useSearchParams();
	const [showPassword, setShowPassword] = useState(false);
	const [form, setForm] = useState({
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const result = await signIn("credentials", {
			email: form.email,
			password: form.password,
			// redirect: false,
			callbackUrl: params.get("callbackUrl") || "/",
		});

		if (!result.ok) {
			Swal.fire("error", "Email or Password not matched.", "error");
		} else {
			Swal.fire("success", "Welcome to Kidz Hub.", "success");
		}
	};

	return (
		<div className="card w-full max-w-sm shadow-xl bg-base-100">
			<div className="card-body">
				<h2 className="text-2xl font-semibold text-center">Login</h2>

				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-4 mt-4"
				>
					{/* Email Input */}
					<label className="form-control w-full">
						<div className="label">
							<span className="label-text">Email</span>
						</div>
						<div className="input input-bordered flex items-center gap-2">
							<MdEmail className="text-xl" />
							<input
								type="email"
								name="email"
								placeholder="Enter your email"
								className="grow outline-0 ring-0"
								onChange={handleChange}
								required
							/>
						</div>
					</label>

					{/* Password Input */}
					<label className="form-control w-full">
						<div className="label">
							<span className="label-text">Password</span>
						</div>
						<div className="input input-bordered flex items-center gap-2">
							<RiLockPasswordFill className="text-xl" />
							<input
								type={showPassword ? "text" : "password"}
								placeholder="••••••••"
								className="grow"
								name="password"
								onChange={handleChange}
								required
							/>
							<button
								type="button"
								onClick={() => setShowPassword(!showPassword)}
								className="text-xl"
							>
								{showPassword ? <IoEyeOff /> : <IoEye />}
							</button>
						</div>
					</label>

					{/* Submit Button */}
					<button
						type="submit"
						className="btn btn-primary w-full mt-2"
					>
						Login
					</button>
				</form>

				<p className="mt-5 text-center">
					Don`t have an account? Please{" "}
					<Link href={"/register"}>Register</Link>
				</p>

				<div className="divider">OR</div>

				{/* Google Login */}
				<SocialButtons />
			</div>
		</div>
	);
}
