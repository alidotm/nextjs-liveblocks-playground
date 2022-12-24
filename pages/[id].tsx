"use client";

import { NextPage } from "next";
import Room from "../components/room";

import { ClientSideSuspense } from "@liveblocks/react";
import { RoomProvider } from "../liveblocks.config";
import { useRouter } from "next/router";

const TopRoom: NextPage = () => {
	const router = useRouter();

	const id = router.query.id;

	if (!id) {
		return <div className="mt-28">No room id found</div>;
	}

	return (
		<RoomProvider
			id={id as string}
			initialPresence={{ cursor: { x: 0, y: 0 } }}
		>
			<ClientSideSuspense
				fallback={
					<div className="w-full flex justify-center mt-28">
						Loading...
					</div>
				}
			>
				{() => <Room />}
			</ClientSideSuspense>
		</RoomProvider>
	);
};

export default TopRoom;
