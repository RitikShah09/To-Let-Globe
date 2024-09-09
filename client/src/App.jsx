import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
}from 'react-router-dom'


import Header from "./Header.jsx";
import Login from "./Login.jsx";
import Register from "./Register.jsx";
import ForgetPassword from "./ForgetPassword.jsx";
import CreateNewPassword from "./CreateNewPassword.jsx";
import NotReady from './NotReady.jsx';


const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<Header/>}>
            <Route path="/" element={<Login/>} />
            <Route path="register" element={<Register/>} />
            <Route path="forgetpassword" element={<ForgetPassword/>} />
            <Route path="reset-password/:token" element={<CreateNewPassword/>} />
            <Route path="home" element={<NotReady/>} />
            <Route path="services" element={<NotReady/>} />
            <Route path="blog" element={<NotReady/>} />
            <Route path="about" element={<NotReady/>} />
            <Route path="contact" element={<NotReady/>} />
            <Route path="propertylisting" element={<NotReady/>} />
        </Route>
    )
)




function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    );
}

export default App;