import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";
import Test from "@/components/Test/Test";
import { authOptions } from "@/lib/authOptions";
import { getServerSession } from "next-auth";

export default async function Home() {
	const session = await getServerSession(authOptions);
	return (
		<div className="min-h-[calc(100vh-319px)] space-y-20">
			<Test />
			{JSON.stringify(session)}
			<section>
				<Banner />
			</section>
			<section className="pb-20">
				<Products />
			</section>
		</div>
	);
}
