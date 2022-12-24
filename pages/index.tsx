import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
	//room state
	const [roomId, setRoomId] = useState<string>("");

	return (
		<>
			<Head>
				<title>Nextjs - Liveblocks</title>
				<meta
					name="description"
					content="Nextjs and liveblocks playground build by github/alidotm"
				/>
				<meta
					name="viewport"
					content="width=device-width, initial-scale=1"
				/>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main className="w-screen min-h-screen py-28 flex justify-center items-center flex-col">
				<div className="w-full max-w-xs bg-gray-100 px-3 py-2 flex flex-col rounded-xl focus-within:ring-2 focus-within:ring-black">
					<label
						htmlFor="room-id"
						className="text-xs font-medium w-full text-gray-400"
					>
						Enter room id
					</label>
					<input
						type="text"
						value={roomId}
						onChange={(e) => setRoomId(e.target.value)}
						id="room-id"
						className="bg-transparent focus:outline-none flex-grow"
					/>
				</div>

				<Link
					href={`/${roomId}`}
					className="group w-full max-w-xs mb-16 mt-3 relative inline-flex items-center overflow-hidden rounded-full bg-black px-6 py-3 text-white focus:outline-none focus:ring-2 active:bg-gray-400 focus-within:ring-gray-400 focus-within:ring-offset-1"
				>
					<span className="absolute right-0 translate-x-full transition-transform group-hover:-translate-x-4 group-focus:-translate-x-4">
						<svg
							className="h-5 w-5"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M17 8l4 4m0 0l-4 4m4-4H3"
							/>
						</svg>
					</span>

					<span className="text-sm font-medium transition-all group-hover:mr-4">
						Join
					</span>
				</Link>
			</main>
		</>
	);
}
