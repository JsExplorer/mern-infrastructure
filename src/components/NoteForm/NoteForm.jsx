import { useState } from "react";
import { addNote } from "../../utilities/users-service";

export default function NoteForm({ notes, setNotes }) {
  const [text, setText] = useState("");

  function handleChange(evt) {
    setText(evt.target.value);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    const newNote = await addNote(text);
    setNotes([...notes, newNote]);
    setText("");
  }

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Note</label>
          <input
            type="text"
            name="note"
            value={text}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit Note</button>
        </form>
      </div>
    </div>
  );
}