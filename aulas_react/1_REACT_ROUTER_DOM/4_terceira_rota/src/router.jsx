import { Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import Usuarios from "./pages/Usuario"

function Router() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/usuarios" element={<Usuarios />} />
        </Routes>
    )
}

export default Router