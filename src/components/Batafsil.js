import React from 'react';
import './Batafsil.scss';
import {Link} from "react-router-dom";
import Footer from "./footer";

function Batafsil(props) {
    return (
        <>
            <div className='Batafsil'>

                <nav className="navbar navbar-expand-md">
                    <Link to="/" className="navbar-brand">
                        <img src="./img/logo_lib.svg" alt=""/>
                    </Link>
                    <button type="button" className="navbar-toggler knopka" data-bs-toggle="collapse"
                            data-bs-target="#myCollapse">
                        <label htmlFor="check">
                            <input type="checkbox" id="check"/>
                            <span></span>
                            <span></span>
                        </label>
                    </button>

                    <div className="collapse navbar-collapse" id="myCollapse">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/Kitoblar">
                                    <button className='btn'>Kitoblar</button>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="http://t.me/nuulibbot" target='_blank'>
                                    <button className='btn'>Kitob buyurtma</button>
                                </a>
                            </li>
                            <li className="nav-item">
                                <Link to="#">
                                    <button className='btn' data-bs-toggle="collapse"
                                            data-bs-target="#Til">Uzb
                                    </button>
                                </Link>
                            </li>
                        </ul>

                    </div>
                </nav>
                <div className="CollapseBox">
                    <div id="Til" className="collapse">
                        <ul className="TilCollapse">
                            <li><a href="#">РУС</a></li>
                            <li><a href="#">ENG</a></li>
                        </ul>
                    </div>
                </div>
                <div className="contetnBox">
                    <div className="left">
                        <div className="date">
                            <img src="./img/date.svg" alt=""/>
                            <span>10:57 / 07.01.2022</span>
                        </div>
                        <p className="title">
                            The Most Popular Celebrity Name List of the Millennium is Finally Here
                        </p>
                        <div className="img">
                            <img src="./img/qo'l.png" alt=""/>
                        </div>
                        <p className='text'>
                            I undorstand how that could positivaly effect your body. But alchamizing means turming
                            elements Laura sebastianI undorstand how that could positivaly effect your body. But
                            alchamizing means turming elements Laura sebastianI undorstand how that could positivaly
                            effect your body. But alchamizing means turming elements Laura sebastianI undorstand how
                            that could positivaly effect your body. But alchamizing means turming elements Laura
                            sebastian.I undorstand how that could positivaly effect your body. But alchamizing means
                            turming elements Laura sebastianI undorstand how that could positivaly effect your body. But
                            alchamizing means turming elements Laura sebastianI undorstand how that could positivaly
                            effect your body. But alchamizing means turming elements Laura sebastianI undorstand how
                            that could positivaly effect your body. But alchamizing means turming elements Laura
                            sebastian
                            I undorstand how that could positivaly effect your body. But alchamizing means turming
                            elements Laura sebastianI undorstand how that could positivaly effect your body. But
                            alchamizing means turming elements Laura sebastianI undorstand how that could positivaly
                            effect your body. But alchamizing means turming elements Laura sebastianI undorstand how
                            that could positivaly effect your body. But alchamizing means turming elements Laura
                            sebastian.I undorstand how that could positivaly effect your body. But alchamizing means
                            turming elements Laura sebastianI undorstand how that could positivaly effect your body. But
                            alchamizing means turming elements Laura sebastianI undorstand how that could positivaly
                            effect your body. But alchamizing means turming elements Laura sebastianI undorstand how
                            that could positivaly effect your body. But alchamizing means turming elements Laura
                            sebastian
                            I undorstand how that could positivaly effect your body. But alchamizing means turming
                            elements Laura sebastianI undorstand how that could positivaly effect your body. But
                            alchamizing means turming elements Laura sebastianI undorstand how that could positivaly
                            effect your body. But alchamizing means turming elements Laura sebastianI undorstand how
                            that could positivaly effect your body. But alchamizing means turming elements Laura
                            sebastian.I undorstand how that could positivaly effect your body. But alchamizing means
                            turming elements Laura sebastianI undorstand how that could positivaly effect your body. But
                            alchamizing means turming elements Laura sebastianI undorstand how that could positivaly
                            effect your body. But alchamizing means turming elements Laura sebastianI undorstand how
                            that could positivaly effect your body. But alchamizing means turming elements Laura
                            sebastian
                            I undorstand how that could positivaly effect your body. But alchamizing means turming
                            elements Laura sebastianI undorstand how that could positivaly effect your body. But
                            alchamizing means turming elements Laura sebastianI undorstand how that could positivaly
                            effect your body. But alchamizing means turming elements Laura sebastianI undorstand how
                            that could positivaly effect your body. But alchamizing means turming elements Laura
                            sebastian.I undorstand how that could positivaly effect your body. But alchamizing means
                            turming elements Laura sebastianI undorstand how that could positivaly effect your body. But
                            alchamizing means turming elements Laura sebastianI undorstand how that could positivaly
                            effect your body. But alchamizing means turming elements Laura sebastianI undorstand how
                            that could positivaly effect your body. But alchamizing means turming elements Laura
                            sebastian
                        </p>
                    </div>
                    <div className="right">
                        <div className="title">
                            <img src="./img/newspaper.png" alt=""/>
                            <p>So’ngi yangiliklar</p>
                        </div>
                        <div className="box">
                            <div className="date">
                                <img src="./img/date.svg" alt=""/>
                                <span>10:57 / 07.01.2022</span>
                            </div>
                            <p>Krestian Stewn Was Seen ILaving Lunch in toronto with Boyfriend Krestian Stewn Was
                                Sessccaen ILaving Lunch in toronto with Boyfriend
                            </p>
                        </div>
                        <div className="box">
                            <div className="date">
                                <img src="./img/date.svg" alt=""/>
                                <span>10:57 / 07.01.2022</span>
                            </div>
                            <p>Krestian Stewn Was Seen ILaving Lunch in toronto with Boyfriend Krestian Stewn Was
                                Sessccaen ILaving Lunch in toronto with Boyfriend
                            </p>
                        </div>
                        <div className="box">
                            <div className="date">
                                <img src="./img/date.svg" alt=""/>
                                <span>10:57 / 07.01.2022</span>
                            </div>
                            <p>Krestian Stewn Was Seen ILaving Lunch in toronto with Boyfriend Krestian Stewn Was
                                Sessccaen ILaving Lunch in toronto with Boyfriend
                            </p>
                        </div>
                        <div className="box">
                            <div className="date">
                                <img src="./img/date.svg" alt=""/>
                                <span>10:57 / 07.01.2022</span>
                            </div>
                            <p>Krestian Stewn Was Seen ILaving Lunch in toronto with Boyfriend Krestian Stewn Was
                                Sessccaen ILaving Lunch in toronto with Boyfriend
                            </p>
                        </div>
                        <div className="box">
                            <div className="date">
                                <img src="./img/date.svg" alt=""/>
                                <span>10:57 / 07.01.2022</span>
                            </div>
                            <p>Krestian Stewn Was Seen ILaving Lunch in toronto with Boyfriend Krestian Stewn Was
                                Sessccaen ILaving Lunch in toronto with Boyfriend
                            </p>
                        </div>
                        <div className="title">
                            <img src="./img/newspaper.png" alt=""/>
                            <p>So’ngi yangiliklar</p>
                        </div>
                        <div className="box">
                            <div className="date">
                                <img src="./img/date.svg" alt=""/>
                                <span>10:57 / 07.01.2022</span>
                            </div>
                            <p>Krestian Stewn Was Seen ILaving Lunch in toronto with Boyfriend Krestian Stewn Was
                                Sessccaen ILaving Lunch in toronto with Boyfriend
                            </p>
                        </div>
                        <div className="box">
                            <div className="date">
                                <img src="./img/date.svg" alt=""/>
                                <span>10:57 / 07.01.2022</span>
                            </div>
                            <p>Krestian Stewn Was Seen ILaving Lunch in toronto with Boyfriend Krestian Stewn Was
                                Sessccaen ILaving Lunch in toronto with Boyfriend
                            </p>
                        </div>
                        <div className="box">
                            <div className="date">
                                <img src="./img/date.svg" alt=""/>
                                <span>10:57 / 07.01.2022</span>
                            </div>
                            <p>Krestian Stewn Was Seen ILaving Lunch in toronto with Boyfriend Krestian Stewn Was
                                Sessccaen ILaving Lunch in toronto with Boyfriend
                            </p>
                        </div>
                        <div className="box">
                            <div className="date">
                                <img src="./img/date.svg" alt=""/>
                                <span>10:57 / 07.01.2022</span>
                            </div>
                            <p>Krestian Stewn Was Seen ILaving Lunch in toronto with Boyfriend Krestian Stewn Was
                                Sessccaen ILaving Lunch in toronto with Boyfriend
                            </p>
                        </div>
                        <div className="box">
                            <div className="date">
                                <img src="./img/date.svg" alt=""/>
                                <span>10:57 / 07.01.2022</span>
                            </div>
                            <p>Krestian Stewn Was Seen ILaving Lunch in toronto with Boyfriend Krestian Stewn Was
                                Sessccaen ILaving Lunch in toronto with Boyfriend
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    );
}

export default Batafsil;