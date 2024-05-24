import { Routes, Route } from "react-router-dom";
import Home from "./templates/Home";
import About from "./templates/About";
import redee from "../redeeapp"
import Contact from "./templates/Contact";
import Navbar from "./navbar";

function App() {
    return (
        <>
            {/* <Navbar /> */}
            <Routes>
                <Route path="/" component={Home} />
                <Route path="/redee" component={redee} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </>
    );
}

export default App;