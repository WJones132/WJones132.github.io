import { Routes, Route } from "react-router-dom";
import Home from "./templates/Home";
import About from "./templates/About";
import redee from "../redeeapp"
import Contact from "./templates/Contact";
import Navbar from "./navbar";

// const IndexPage = () => <h3>Home Page</h3>;

function IndexPage() {
    return (
        <h3>Home Page</h3>
    )
}

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<IndexPage /} />
            </Routes>
        </>
    );
}

export default App;