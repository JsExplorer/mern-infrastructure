const Note = require("../../models/note");

const getAll = async (req, res) => {
  const notes = await Note.find();
  res.json({ notes });
};

async function create(req, res) {
    try {
      const note = await Note.create({
        text: req.body.text,
        user: req.user._id,
      });
      res.json({ note });
    } catch (err) {
      res.status(400).json(err);
    }
  }

const del = async (req, res) => {
    const { id } = req.params;
    const note = await Note.findByIdAndDelete(id);
    res.status(200).json({ note });
}

module.exports = {
  getAll,
  create,
  del,
};