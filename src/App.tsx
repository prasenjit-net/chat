import React from 'react';
import {TitleBar} from "./components/layout/TitleBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Container} from "@mui/material";
import {Home} from "./components/pages/Home";

function App() {
    return (
        <Container maxWidth="xl">
            <Router>
                <TitleBar/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                </Routes>
            </Router>
        </Container>
    );
}

export default App;
