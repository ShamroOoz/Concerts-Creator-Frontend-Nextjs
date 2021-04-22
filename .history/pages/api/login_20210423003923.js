import { API_URL } from "@/config/index";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send(`${req.method} method is not allowed`);
  }
  const res = await fetch(`${API_URL}/auth/local`, {
    method: "POST",
    body: req.body,
  });
  const { jwt } = await res.json();

  res.status(200).json({});
}
