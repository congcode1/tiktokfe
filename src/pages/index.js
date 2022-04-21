import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import Home from "./Home";
import Profile from "./Profile";

export default function Pages() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
            <Route path="/profile" element={<Profile />} />
        </Routes>
    </BrowserRouter>
}