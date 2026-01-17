import Link from "next/link";
import React from "react";
import { BiSolidErrorAlt } from "react-icons/bi";

const Error404 = () => {
	return (
		<div className="flex flex-col min-h-[calc(100vh-319px)] space-y-10 justify-center items-center">
			<BiSolidErrorAlt size={100} className="text-primary" />
			<h2 className="text-4xl font-bold">Page Not Found</h2>
			<Link href={"/"} className="btn btn-primary btn-outline">
				Go to Home
			</Link>
		</div>
	);
};

export default Error404;
