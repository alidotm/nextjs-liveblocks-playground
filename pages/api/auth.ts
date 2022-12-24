import { authorize } from "@liveblocks/node";
import { NextApiRequest, NextApiResponse } from "next";

export default async function auth(req: NextApiRequest, res: NextApiResponse) {
	const { room, username } = req.body;

	const result = await authorize({
		room: room,
		secret: process.env.LIVEBLOCKS_API_KEY as string,
	});
	return res.status(result.status).end(result.body);
}
