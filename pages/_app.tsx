import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "./components/header";
import { ClientSideSuspense } from "@liveblocks/react";
import { RoomProvider } from "../liveblocks.config";
import { useRouter } from "next/router";

export default function App({ Component, pageProps }: AppProps) {
	const router = useRouter();

	const roomId = router.query.id ? (router.query.id as string) : "test";

	return (
		<>
			<RoomProvider
				id={roomId}
				initialPresence={{ cursor: { x: 0, y: 0 } }}
			>
				<Header />
				<ClientSideSuspense
					fallback={
						<div className="w-full flex justify-center mt-28">
							Loading...
						</div>
					}
				>
					{() => <Component {...pageProps} />}
				</ClientSideSuspense>
			</RoomProvider>
		</>
	);
}
