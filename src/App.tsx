import React from 'react';
import {TitleBar} from "./components/layout/TitleBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Container} from "@mui/material";
import {Home} from "./components/pages/Home";
import {AuthenticationProvider} from "./components/layout/AuthenticationProvider";

function App() {
    return (
        <AuthenticationProvider>
            <Container maxWidth="xl" style={{flexDirection: "column", height: "100vh", display: "flex"}}>
                <Router>
                    <TitleBar/>
                    <Routes>
                        <Route path="/" element={<Home/>}/>
                    </Routes>
                </Router>
            </Container>
        </AuthenticationProvider>
    );
}

export default App;
