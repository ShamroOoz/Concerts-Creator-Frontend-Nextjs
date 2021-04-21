export default (req, res) => {
  if (req.method !== "GET") {
    res.status(405).send(`${req.method} method is not allowed`);
  }
  const slug = req.query.slug;
  res.status(200).json({ slug });
};
