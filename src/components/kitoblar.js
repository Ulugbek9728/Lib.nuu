import React from 'react';
import {Link} from "react-router-dom";
import Footer from "./footer";
import './kitoblar.scss'


function Kitoblar(props) {
    return (
        <>
            <div className='kitoblar-box'>
                <div className='kitoblar'>
                    <div className="line">
                        <Link className='asosiyLink' to={'/'}>Asosiy sahifa / kitoblar</Link>
                        <div className="libLogo">
                            <img src="../img/logo_lib.svg" alt=""/>
                        </div>
                        <div className="text">
                            Mirzo ulug’bek nomidagi O’zbekiston milliy universiteti kutubxonosining rasmiy veb sayti, 70
                            mingdan
                            ziyod elektron kitoblar mavjud.
                        </div>
                        <div className="serch">
                            <input className="" type="text" placeholder="Kitob qidiring"/>
                            <button className="btn">
                                <img src="../img/shape.svg" alt=""/>
                            </button>

                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Kitoblar;