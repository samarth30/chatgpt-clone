import type { NextApiRequest, NextApiResponse } from "next";
import query from "../../lib/queryApi";
import admin from "firebase-admin";
import { adminDb } from "../../firebaseAdmin";

type Data = {
  answer: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { prompt, chatId, model, session } = req.body;
  if (!prompt) {
    res
      .status(400)
      .json({ answer: "No prompt provided. Please provide a prompt!" });
  }
  if (!chatId) {
    res.status(400).json({ answer: "Please provide a valid chat ID!" });
  }

  // ChatGPT Query
  const response = await query(prompt, model);

  const message: Message = {
    text: response || "I'm sorry, I don't know how to respond to that.",
    createdAt: admin.firestore.Timestamp.now(),
    user: {
      _id: "ChatGPT",
      name: "ChatGPT",
      avatar: "https://links.papareact.com/89k",
    },
  };

  await adminDb
    .collection("users")
    .doc(session?.user?.email)
    .collection("chats")
    .doc(chatId)
    .collection("messages")
    .add(message);

  res.status(200).json({ answer: message.text });
}
