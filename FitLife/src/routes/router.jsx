import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import FormularioIdoso from "../pages/FormularioIdoso";
import Perfil from "../pages/Perfil";
import PerfilTreinador from "../pages/PerfilTreinador";

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/login", element: <Login /> },
  { path: "/FormularioIdoso", element: <FormularioIdoso /> },
  { path: "/cadastro", element: <Cadastro /> },
  { path: "/perfil", element: <Perfil /> },
  { path: "/perfilAdm", element: <PerfilTreinador /> },
]);

export default router;
