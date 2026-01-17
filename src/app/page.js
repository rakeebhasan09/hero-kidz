import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";

export default function Home() {
	return (
		<div className="min-h-[calc(100vh-319px)] space-y-20">
			<section>
				<Banner />
			</section>
			<section className="pb-20">
				<Products />
			</section>
		</div>
	);
}
