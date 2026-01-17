import { Poppins } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import Navbar from "@/components/layOuts/Navbar";
import Footer from "@/components/layOuts/Footer";

const poppins = Poppins({
	weight: ["100", "200", "400", "500", "600", "800"],
});

export const fontBangla = localFont({
	src: "../fonts/mayaboti-normal.ttf",
});

export const metadata = {
	metadataBase: new URL("https://hero-kidz-project.vercel.app"), // change domain

	title: {
		default: "HeroKidz – Smart Learning Toys for Kids",
		template: "%s | HeroKidz",
	},

	description:
		"HeroKidz offers safe, premium-quality learning toys, educational boards, and activity tools designed to improve problem-solving, creativity, and early childhood development.",

	keywords: [
		"educational toys",
		"kids learning toys",
		"preschool learning tools",
		"counting board",
		"early math learning",
		"children development toys",
	],

	// 🔵 OPEN GRAPH (Facebook, LinkedIn, WhatsApp)
	openGraph: {
		type: "website",
		locale: "en_US",
		url: "https://hero-kidz-project.vercel.app",
		siteName: "HeroKidz",
		title: "HeroKidz – Smart Learning Toys for Smart Kids",
		description:
			"Explore high-quality learning products designed to make early education fun, interactive, and effective.",
		images: [
			{
				url: "https://i.ibb.co.com/h1sJjkk8/image.png",
				width: 1200,
				height: 630,
				alt: "HeroKidz Homepage Preview",
			},
		],
	},

	// 🐦 TWITTER (X) PREVIEW
	twitter: {
		card: "summary_large_image",
		title: "HeroKidz – Learning Toys for Kids",
		description:
			"Safe and engaging learning toys designed to boost children's creativity and cognitive skills.",
		images: ["https://i.ibb.co.com/h1sJjkk8/image.png"],
	},

	// 🟢 ICONS
	icons: {
		icon: "https://i.ibb.co.com/tMZ6vwz5/image.png",
		shortcut: "https://i.ibb.co.com/tMZ6vwz5/image.png",
		apple: "https://i.ibb.co.com/tMZ6vwz5/image.png",
	},

	applicationName: "HeroKidz",
	creator: "HeroKidz Team",
	publisher: "HeroKidz",

	// 🟣 SEO Robots
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-snippet": -1,
			"max-image-preview": "large",
			"max-video-preview": -1,
		},
	},

	manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${poppins.className} antialiased`}>
				<header className="py-2 container mx-auto">
					<Navbar />
				</header>
				<main className="py-2 container mx-auto">{children}</main>
				<footer>
					<Footer />
				</footer>
			</body>
		</html>
	);
}
