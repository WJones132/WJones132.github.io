import React, { Component } from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Link } from "react-router-dom";

const IndexPage = () => <h3>Home Page</h3>;

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


class App extends Component {
    render() {
        return (
            ReactDOM.createRoot(document.getElementById('root')).render(
                <React.StrictMode>
                    <HashRouter basename="/">
                        <section className="App">
                            <Router>
                                <Link to="/">Home</Link>
                                <Route exact path="/" component={IndexPage} />
                            </Router>
                        </section>
                    </HashRouter>
                </React.StrictMode>
            )
        )
    }
}

export default App;