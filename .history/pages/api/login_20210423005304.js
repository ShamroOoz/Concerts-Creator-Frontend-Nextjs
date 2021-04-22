import { API_URL } from "@/config/index";

export default async (req, res) => {
  const { identifier, password } = req.body;
  if (req.method !== "POST") {
    return res.status(405).send(`${req.method} method is not allowed`);
  }

  const response = await fetch(`${API_URL}/auth/local`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      identifier,
      password,
    }),
  });

  if (!response.ok) {
    return res.status(500).json({ error: "Something went wrong" });
  }
  const { jwt } = await response.json();
  return res.status(200).json({ token: jwt });
};
