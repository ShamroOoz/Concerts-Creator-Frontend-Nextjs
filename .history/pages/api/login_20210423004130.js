import { API_URL } from "@/config/index";

export default async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send(`${req.method} method is not allowed`);
  }
  const response = await fetch(`${API_URL}/auth/local`, {
    method: "POST",
    body: req.body,
  });
  const { jwt } = await response.json();

  res.status(200).json({ token: jwt });
};
