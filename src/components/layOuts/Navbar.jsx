import React from "react";
import Logo from "./Logo";
import NavLink from "../buttons/NavLink";
import Link from "next/link";
import { GrCart } from "react-icons/gr";
import AuthButtons from "../buttons/AuthButtons";

const Navbar = () => {
	const navItems = (
		<>
			<li>
				<NavLink href={"/"}>Home</NavLink>
			</li>
			<li>
				<NavLink href={"/products"}>Products</NavLink>
			</li>
			<li>
				<NavLink href={"/blog"}>Blog</NavLink>
			</li>
			<li>
				<NavLink href={"/contact"}>Contact</NavLink>
			</li>
		</>
	);
	return (
		<div className="navbar">
			<div className="navbar-start">
				<div className="dropdown">
					<div tabIndex={0} role="button" className="lg:hidden mr-1">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-10 w-10"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>
						</svg>
					</div>
					<ul
						tabIndex="-1"
						className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
					>
						{navItems}
					</ul>
				</div>
				<Logo />
			</div>
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal p-0">{navItems}</ul>
			</div>
			<div className="navbar-end space-x-4">
				<Link href={"/cart"} className="btn btn-primary">
					<GrCart />
				</Link>
				<AuthButtons />
			</div>
		</div>
	);
};

export default Navbar;
