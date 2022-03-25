import React from 'react';
import {Link} from "react-router-dom";
import Footer from "./footer";

function Yangiliklar(props) {
    return (
        <div>
            <Link to={'/'}>Home page</Link>
            <div>yangiliklar</div>
            <Footer/>
        </div>
    );
}

export default Yangiliklar;