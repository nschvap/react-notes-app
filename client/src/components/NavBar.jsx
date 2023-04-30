import { Link } from "react-router-dom"

function NavBar() {
  return (
    <div className="py-3 px-5 flex justify-between bg-yellow-500 items-center">
      <Link to={'/'}>
        <h1 className="text-xl font-bold italic text-zinc-700">notesapp</h1>
      </Link>
      <Link to={'/notesform'}>
        <button className="hover:bg-zinc-600 py-2 px-2 text-white font-semibold bg-zinc-700 rounded-xl">Crear nota</button>
      </Link>
    </div>
  )
}

export default NavBar