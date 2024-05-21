import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Home from "./Components/Home";
import MySkills from "./Components/MySkills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

function App() {
    return (
        <>
          <Router>
                <Routes>
                    <Route
                        exact
                        path="/"
                        element={<Home />}
                    />

                    <Route
                        exact
                        path="/MySkills"
                        element={<MySkills />}
                    />

                    <Route
                        exact
                        path="/Projects"
                        element={<Projects />}
                    />
 
                    <Route
                        exact
                        path="/Contact"
                        element={<Contact />}
                    />
                </Routes>
            </Router>
        </>
    );
}

export default App;