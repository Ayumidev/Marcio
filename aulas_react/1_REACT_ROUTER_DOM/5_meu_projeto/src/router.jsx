import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Usuarios from "./pages/Pag2.jsx"

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Pag2" element={<Usuarios />} />
        </Routes>
    )
}

export default Router