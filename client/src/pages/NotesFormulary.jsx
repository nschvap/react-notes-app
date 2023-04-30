import { useEffect, useState } from "react";
import { createNote, getNotes } from "../api/notes.api";
import { useNavigate } from "react-router-dom";

function NotesFormulary() {
  const [notes, setNotes] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    async function getData() {
      const res = await getNotes();
      setNotes(res.data);
    }

    getData();
    console.log(notes);
  }, []);

  const submitForm = (e) => {
    e.preventDefault();

    async function doThis() {
      console.log(title)
      console.log(description)
      const res = await createNote(title, description);
      navigate("/");
      console.log(res)
    }

    doThis();
  };

  return (
    <div className="flex justify-center w-full items-center flex-col">
      <p className="font-bold text-3xl text-zinc-700 italic mt-5">Crear nota</p>
      <form action="#" onSubmit={submitForm} className="flex flex-col justify-center items-center bg-yellow-400 rounded-lg px-5 py-7 mt-6" >
        <label htmlFor="title" className="font-semibold italic text-zinc-700 text-lg mb-3">Ingresa el titulo de la nota</label>
        <input
          type="text"
          name="title"
          onChange={(e) => setTitle(e.target.value)}
          className=" px-2 bg-yellow-100/50 w-64 text-zinc-700 font-semibold outline-none"
        />
        <label htmlFor="description" className="font-semibold italic text-zinc-700 text-lg mt-5 mb-3">Ingresa la descripcion de la nota</label>
        <textarea
          name="description"
          cols="30"
          rows="5"
          onChange={(e) => setDescription(e.target.value)}
          className="px-2 resize-none bg-yellow-100/50 w-64 text-zinc-700 font-semibold outline-none"
        ></textarea>

        <button type="submit" className="px-3 py-2 bg-zinc-700 text-white font-bold rounded-lg mt-5 hover:bg-zinc-600">Enviar</button>
      </form>
    </div>
  );
}

export default NotesFormulary;
