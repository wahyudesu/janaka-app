import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "../index.css";
import Providers from "@/components/providers";
import Header from "@/components/navbar";


const poppins = Poppins({
	variable: "--font-poppins",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	display: "swap",
});

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "janaka-app",
	description: "janaka-app",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body
				   className={`${poppins.variable} ${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
			>
				<Providers>
					<div className="grid grid-rows-[1fr] h-svh">
						{children}
					</div>
				</Providers>
			</body>
		</html>
	);
}
