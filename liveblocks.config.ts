import { createClient } from "@liveblocks/client";
import { createRoomContext } from "@liveblocks/react";

export const client = createClient({
	authEndpoint: "/api/auth",
	throttle: 80,
    
});

type Presence = {
	// cursor: { x: number, y: number } | null,
	// ...
	cursor: { x: number; y: number };
	// name: string;
};

type Storage = {
	// animals: LiveList<string>,
	// ...
};

export const {
	suspense: {
		RoomProvider,
		useMyPresence,
		useUpdateMyPresence,
		useObject,
		useRoom,
		useOthersMapped,
		useOthers,
	},
	/* ...all the other hooks you’re using... */
} = createRoomContext<Presence, Storage /* UserMeta, RoomEvent */>(client);
