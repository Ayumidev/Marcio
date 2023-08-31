import { Link } from "react-router-dom"

function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <Link to={"/Pag2"}>Venha ver o sol</Link>
    </div>
  )
}

export default Home