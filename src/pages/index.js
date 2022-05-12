import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Detail from "./Detail";
import Home from "./Home";
import Profile from "./Profile";
import Test from "./Test";

export default function Pages() {
    return <BrowserRouter>
        <Routes>
            <Route path="/test" element={<Test />} />
            <Route path="/" element={<Home />} />
            <Route path="/detail/:id" element={<Detail />} />
            {/* <Route
                path="/reload-1/:id"
                element={<Navigate to="/detail/:id" replace />}
            /> */}
            <Route path="/profile" element={<Profile />} />
        </Routes>
    </BrowserRouter>
}