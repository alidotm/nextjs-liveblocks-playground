import { ClientSideSuspense } from "@liveblocks/react";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { RoomProvider } from "../liveblocks.config";
import Room from "./components/room";

type Props = {
	id: string;
};

const TopRoom: NextPage<Props> = ({ id }) => {
	return (
		<RoomProvider id={id} initialPresence={{ cursor: { x: 0, y: 0 } }}>
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
	const id = ctx.params?.id as string;

	if (!id) {
		return {
			notFound: true,
		};
	}

	return {
		props: {
			id,
		},
	};
};

export default TopRoom;
