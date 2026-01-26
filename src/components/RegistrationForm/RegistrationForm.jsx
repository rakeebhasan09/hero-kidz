"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { IoEyeOff, IoEye } from "react-icons/io5";
import Link from "next/link";
import { FaUser } from "react-icons/fa";
import { postUser } from "@/actions/server/auth";
import { useRouter } from "next/navigation";
import SocialButtons from "../socialButtons/SocialButtons";

const RegistrationForm = () => {
	const router = useRouter();
	const [showPassword, setShowPassword] = useState(false);
	const [form, setForm] = useState({
		name: "",
		email: "",
		password: "",
	});

	const handleChange = (e) => {
		setForm({ ...form, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const result = await postUser(form);
		if (result.acknowledged) {
			alert("Successfull. Please Login");
			router.push("/login");
		}
	};

	return (
		<div className="card w-full max-w-sm shadow-xl bg-base-100">
			<div className="card-body">
				<h2 className="text-2xl font-semibold text-center">Register</h2>

				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-4 mt-4"
				>
					{/* Name Input Field */}
					<label className="form-control w-full">
						<div className="label">
							<span className="label-text">Name</span>
						</div>
						<div className="input input-bordered flex items-center gap-2">
							<FaUser className="text-xl" />
							<input
								type="text"
								placeholder="Enter your name"
								className="grow"
								name="name"
								onChange={handleChange}
							/>
						</div>
					</label>

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
								className="grow"
								required
								name="email"
								onChange={handleChange}
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
								name="password"
								onChange={handleChange}
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
						Register
					</button>
				</form>

				<p className="mt-5 text-center">
					Already have an account? Please{" "}
					<Link href={"/login"}>Login</Link>
				</p>

				<div className="divider">OR</div>
			</div>
			<SocialButtons />
		</div>
	);
};

export default RegistrationForm;
