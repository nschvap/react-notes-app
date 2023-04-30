import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NotesFormulary from "./pages/NotesFormulary.jsx";
import NotesListing from "./pages/NotesListing.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <main className="w-full h-screen bg-yellow-300">
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<Navigate to={"/notes"} />}></Route>
            <Route path="/notes" element={<NotesListing />}></Route>
            <Route path="/notesform" element={<NotesFormulary />}></Route>
          </Routes>
        </BrowserRouter>
      </main>
    </>
  );
}

export default App;
