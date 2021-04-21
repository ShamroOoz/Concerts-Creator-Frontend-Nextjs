export default (req, res) => {
  if (req.method !== "GET") {
    const slug = req.query.slug;
    res.status(405).send(`${req.method} method is not allowed`);
  }
  res.status(200).json({ events });
};
