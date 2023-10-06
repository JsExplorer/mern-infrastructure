import { useState, useEffect } from "react";
import NoteForm from "../../components/NoteForm/NoteForm";
import { getNotes } from "../../utilities/users-service";


export default function NotePage({ }) {
    const [notes, setNotes] = useState([]);

    useEffect(()=> {
    async function fetchData() {
        try{
            const data = await getNotes();
            console.log(data.notes);
            setNotes(data.notes);
        } catch (error) {
            console.log('The error is', error);
        }
      };
      fetchData(); 
    }, []);

    // const handleSumbit = async (note) => {
    //     const newNote = await addNote(note);
    //     setNotes([...notes, newNote]);
    // }

  return (
    <div>
        <h1>Notes Page</h1>
        <NoteForm notes={notes} setNotes={setNotes} />
        {notes.length === 0 ? (
            <h2>No Notes Yet!</h2>
        ) : (
        <ul>
            {notes.map((note)=> (
                <li>
                    <p>{note.text}</p>
                    <p>{new Date(note.createdAt).toLocaleString()}</p>
                </li>
            ))}
        </ul>
        )}
    </div>
    );
}