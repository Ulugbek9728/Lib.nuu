import React from 'react';
import {Routes, Route,} from 'react-router-dom';
import Main from "./main";
import Kitoblar from './components/kitoblar'
import Yangiliklar from './components/yangiliklar'
import Admin from "./components/admin";

import "./app.scss";


function App(props) {
    return (
        <div>
            <Routes>
                <Route path="/Kitoblar" element={<Kitoblar/>} />
                <Route path="/Yangiliklar" element={<Yangiliklar/>} />
                <Route path="/Admin" element={<Admin/>} />
                <Route path="/" element={<Main/>} />
            </Routes>
        </div>
    );
}

export default App;