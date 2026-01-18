"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEyeOff, IoEye } from "react-icons/io5";
import Link from "next/link";

export default function LoginForm() {
	const [showPassword, setShowPassword] = useState(false);

	return (
		<div className="card w-full max-w-sm shadow-xl bg-base-100">
			<div className="card-body">
				<h2 className="text-2xl font-semibold text-center">Login</h2>

				<form className="flex flex-col gap-4 mt-4">
					{/* Email Input */}
					<label className="form-control w-full">
						<div className="label">
							<span className="label-text">Email</span>
						</div>
						<div className="input input-bordered flex items-center gap-2">
							<MdEmail className="text-xl" />
							<input
								type="email"
								placeholder="Enter your email"
								className="grow outline-0 ring-0"
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
				<button className="btn btn-outline w-full flex items-center gap-2">
					<FcGoogle className="text-2xl" />
					Login with Google
				</button>
			</div>
		</div>
	);
}
