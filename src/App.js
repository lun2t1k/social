import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/main";
import AuthLayout from './layouts/auth';

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="*" element={<MainLayout />} />
                <Route path="/login" element={<AuthLayout />} />
            </Routes>
        </BrowserRouter>
    );
}
