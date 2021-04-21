import { events } from "../data.json";

export default (req, res) => {
  if (req.method !== "GET") {
    res.status(500).send("This method is not allowed");
  }
  res.status(200).json({ events });
};
