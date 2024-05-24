import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";

const IndexPage = () => {
    return <h3>Home Page</h3>;
};

function App() {
    return (
        <section className="App">
            <Router>
                <Link to="/">Home</Link>
                <Route exact path="/" component={IndexPage} />
            </Router>
        </section>
    )
}


const rootElement = ReactDOM.createRoot(document.getElementById('root'));
rootElement.render(
    <HashRouter>
        <section className="App">
            <Router>
                <Link to="/">Home</Link>
                <Route exact path="/" element={<IndexPage />} />
            </Router>
        </section>
    </HashRouter>
)
