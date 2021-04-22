import { API_URL } from "@/config/index";

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send(`${req.method} method is not allowed`);
  }
  res.status(200).json(req.body);
};
