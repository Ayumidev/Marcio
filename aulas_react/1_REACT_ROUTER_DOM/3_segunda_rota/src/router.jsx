import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Usuario from "./pages/Usuario"

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path='/Usuario' element={<Usuario />} />
        </Routes>
    )
}

export default Router