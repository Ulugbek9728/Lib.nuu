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
                <div className="titleKatalog">
                    Katalog boyicha qidiring
                </div>
                <div className="navbar">
                    <div><a href="#">Matematika</a></div>
                    <div><a href="#">Dasturlash</a></div>
                    <div><a href="#">Fizika</a></div>
                    <div><a href="#">Kimyo</a></div>
                    <div><a href="#">Biologiya</a></div>
                    <div><a href="#">Ijtimoiy</a></div>
                    <div><a href="#">Tarix</a></div>
                    <div><a href="#">Geografiya</a></div>
                    <div><a href="#">Xorijiy tillar</a></div>
                    <div><a href="#">Geologiya</a></div>
                    <div><a href="#">Ekologiya</a></div>
                    <div><a href="#">Gidrometeorologiya</a></div>
                    <div><a href="#">Sport</a></div>
                    <div><a href="#">Iqtisodiyot</a></div>
                </div>
            </div>
            <Footer/>
        </>
    );
}

export default Kitoblar;