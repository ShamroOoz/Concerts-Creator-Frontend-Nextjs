import { events } from "../data.json";

export default (req, res) => {
  res.statusCode = 200;
  res.json({ name: "John Doe", events });
};
