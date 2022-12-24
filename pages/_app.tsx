import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Suspense } from "react";
import Header from "./components/header";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Suspense fallback={<div>Loading...</div>}>
			<Header />
			<Component {...pageProps} />
		</Suspense>
	);
}
