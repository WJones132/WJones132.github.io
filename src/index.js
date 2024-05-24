import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import App from "./app";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <HashRouter>
        <App />
    </HashRouter>
);

// 
// function App() {
//     return (
//         <section className="App">
//             <Router>
//                 <Link to="/">Home</Link>
//                 <Route exact path="/" component={IndexPage} />
//             </Router>
//         </section>
//     )
// }


// class App extends Component {
//     render() {
//         return (
//             ReactDOM.createRoot(document.getElementById('root')).render(
//                 <HashRouter basename="/">
//                     <Link to="/">Home</Link>
//                     <Route exact path="/" component={IndexPage} />
//                 </HashRouter>
//             )
//         )
//     }
// }

// export default App;