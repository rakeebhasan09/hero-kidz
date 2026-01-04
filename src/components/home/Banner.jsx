import { fontBangla } from "@/app/layout";
import Image from "next/image";
import React from "react";

const Banner = () => {
	return (
		<div className="flex flex-col-reverse md:flex-row justify-between items-center">
			<div className="flex-1 space-y-5">
				<h2 className={`${fontBangla.className} text-6xl font-bold`}>
					আপনার শিশুকে দিন একটি <br />{" "}
					<span className="text-primary">সুন্দর ভবিষ্যৎ</span>
				</h2>
				<p>Buy every toy up to 15% discount.</p>
				<button className="btn btn-primary btn-outline">
					Explore Products
				</button>
			</div>
			<div className="flex-1">
				<Image
					alt="Hero Image"
					src="/assets/hero.png"
					width={500}
					height={400}
					className="block mx-auto"
				/>
			</div>
		</div>
	);
};

export default Banner;
