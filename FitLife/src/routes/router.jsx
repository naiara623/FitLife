import { createBrowserRouter } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'
import FormularioIdoso from '../pages/FormularioIdoso'

const router = createBrowserRouter([

    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    {path: '/FormularioIdoso', element: <FormularioIdoso/>}
    

])

export default router;