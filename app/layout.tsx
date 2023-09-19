import Sidebar from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import SupebaseProvider from "@/providers/SupabaseProvider";
import UserProvider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import ToasterProvider from "@/providers/ToasterProvider";
import getSongsByUserId from "@/actions/getSongsByUserId";
import getActiveProductsWithPrices from "@/actions/getActiveProducts";

import Player from "@/components/Player";

const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Spotify Clone",
	description: "Listen to music!",
};

export const revalidate = 0;
export default async function RootLayout({ children }: { children: React.ReactNode }) {
	const userSongs = await getSongsByUserId();
	const products = await getActiveProductsWithPrices();

	return (
		<html lang="en">
			<body className={font.className}>
				<ToasterProvider />
				<SupebaseProvider>
					<UserProvider>
						<ModalProvider products={products} />
						<Sidebar songs={userSongs}>{children}</Sidebar>
						<Player />
					</UserProvider>
				</SupebaseProvider>
			</body>
		</html>
	);
}
