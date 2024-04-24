import React from "react";

//Layout
import DefaultLayout from "./layouts/DefaultLayout";

// Routes
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    {routes.map((route, index) => {
                        const Page = route.page;
                        return <Route key={index} path={route.path} element={<Page />} />;
                    })}
                </Route>

                <Route path="admin"></Route>
            </Routes>
        </Router>
    );
}

export default App;
