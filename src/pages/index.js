import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "./Detail/Detail";
import Home from "./Home";

export default function Pages() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/detail" element={<Detail />} />
        </Routes>
    </BrowserRouter>
}