import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from '../pages/main/MainPage'
import SignupPage from "../pages/auth/SignupPage";
import LoginPage from "../pages/auth/LoginPage";

const Router = () => {
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>} />
            <Route path="/signup" element={<SignupPage/>} />
            <Route path="/login" element={<LoginPage/>} />
            <Route path="/oauth/signup" element={<SignupPage/>} />
        </Routes>
    </BrowserRouter>
    )
}


export default Router;
