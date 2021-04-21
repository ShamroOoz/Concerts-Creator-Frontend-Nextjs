import { events } from "../data.json";
import { API_URL } from "@/config/index";
export default (req, res) => {
  if (req.method !== "GET") {
    return res.status(405).send(`${req.method} method is not allowed`);
  }
  res.status(200).json(events);
};
