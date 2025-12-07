import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeRoute from "./home/home";

export default function RoutesManager() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<HomeRoute />} />
            </Routes>
        </BrowserRouter>
    )
}
