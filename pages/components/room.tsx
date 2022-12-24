import { FC, useEffect } from "react";
import {
	useOthers,
	useOthersMapped,
	useRoom,
	useUpdateMyPresence,
} from "../../liveblocks.config";

const Room: FC = () => {
	const others = useOthers();
	const room = useRoom();
	const cursor = useOthersMapped((other) => other.presence.cursor);
	const updateMyPresense = useUpdateMyPresence();

	const mouseMove = (e: MouseEvent) => {
		updateMyPresense({
			cursor: {
				x: e.pageX,
				y: e.pageY,
			},
		});
	};

	useEffect(() => {
		if (typeof window !== "undefined") {
			window.addEventListener("mousemove", mouseMove);
		}

		return () => {
			window.removeEventListener("mousemove", mouseMove);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<main className="py-28 w-full min-h-screen flex justify-center items-center">
			{cursor.map((c) => (
				<div
					className="fixed"
					style={{ top: c[1].y, left: c[1].x }}
					key={crypto.randomUUID()}
				>
					Cursor
				</div>
			))}

			<p className="text-xl">
				{others.length + " User's connected in this room: " + room.id}
			</p>
		</main>
	);
};

export default Room;
