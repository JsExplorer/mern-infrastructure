const Note = require("../../models/note");

const getAll = async (req, res) => {
  const notes = await Note.find();
  res.json({ notes });
};

async function create(req, res) {
    try {
      const note= await Note.create(req.body);
      res.json({ note });
    } catch (err) {
      res.status(400).json(err);
    }
  }

module.exports = {
  getAll,
  create,
};