import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import Perfil from "../pages/Perfil";


const router = createBrowserRouter([
    {path: "/login", element: <Login />},
    {path: "/perfil", element: <Perfil />},

])

export default router;