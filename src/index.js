import * as React from "react";
import * as ReactDOM from "react-dom";
import { Link, HashRouter as Route, Router } from "react-router-dom";

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


const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement)
