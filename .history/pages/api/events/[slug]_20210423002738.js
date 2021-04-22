import { events } from "./data.json";

export default (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).send(`${req.method} method is not allowed`);
  }
  const slug = req.query.slug;
  const data = events.filter((evt) => evt.slug === slug);
  res.status(200).json({ data });
};
