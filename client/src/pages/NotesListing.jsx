import { useState, useEffect } from "react";
import { getNotes } from "../api/notes.api";
import NoteCard from "../components/NoteCard";

function NotesListing() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    async function getData() {
      const res = await getNotes();
      setNotes(res.data);
    }

    getData();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-4 mt-5 ml-5">
      {notes.map((note) => (
        <NoteCard key={note.id} obj={note} />
      ))}
    </div>
  );
}

export default NotesListing;
