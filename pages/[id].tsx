"use client";

import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import Room from "../components/room";

import { ClientSideSuspense } from "@liveblocks/react";
import { RoomProvider } from "../liveblocks.config";

type Props = {
	roomId: string;
};

const TopRoom: NextPage<Props> = ({ roomId }) => {
	return (
		<RoomProvider id={roomId} initialPresence={{ cursor: { x: 0, y: 0 } }}>
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

export const getServerSideProps: GetServerSideProps = async (
	ctx: GetServerSidePropsContext
) => {
	if (!ctx.params?.id) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			roomId: ctx.params?.id,
		},
	};
};

export default TopRoom;
