import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import AOS from "aos";
import "aos/dist/aos.css";
import './Yangiliklar.scss'
import Footer from "./footer";

function Yangiliklar(props) {
    useEffect(() => {
        AOS.init()
    });

    return (
        <div className='YangiliklarCompon'>
            <div className='kitoblar'>
                <div className="line">
                    <Link className='asosiyLink' to={'/'}>Asosiy sahifa / Yangiliklar</Link>
                    <div className="libLogo">
                        <img src="../img/logo_lib.svg" alt=""/>
                    </div>
                    <div className="text">
                        Mirzo ulug’bek nomidagi O’zbekiston milliy universiteti kutubxonosining veb sayti
                    </div>
                </div>
            </div>
            <div className="title"
                 data-aos="fade-right"
                 data-aos-duration="1200"
                 data-aos-easing="ease-in-sine">Yangiliklar</div>
            <hr/>
            <div className="boxYangiliklar">
                <img src="./img/qo'l.png" alt=""/>
                <div className="right">
                    <h1>The Most Popular Celebrity Name List of
                        the Millennium is
                        Finally Here
                    </h1>
                    <p>I undorstand how that could positivaly effect your body. but
                        alchamizing means turming elements
                        Laura sebastian January 7, 2022
                    </p>
                    <button className='btn'>
                        <Link to="/Batafsil"> Batafsil</Link>
                    </button>
                </div>
            </div>

            <div className="container-fluid">
                <div className="row smolNewBox">
                    <div className="col-lg-3 col-6 smolNew"
                         data-aos="zoom-in"
                         data-aos-duration="1200"
                         data-aos-easing="ease-in-sine">
                        <img src="./img/women.png" alt=""/>
                        <p>
                            Krestian Stewn Was Seen ILaving Lunch in toronto with Boyfriend
                        </p>
                        <hr/>
                        <div className="boxcha">
                            <div className="left">
                                <img src="./img/Group5.png" alt=""/>
                                <span>101 Ko’rilgan</span>
                            </div>
                            <button className='btn'>Batafsil</button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 smolNew"
                         data-aos="zoom-in"
                         data-aos-duration="1200"
                         data-aos-easing="ease-in-sine">
                        <img src="./img/men.png" alt=""/>
                        <p>
                            Krestian Stewn Was Seen ILaving Lunch in toronto with Boyfriend
                        </p>
                        <hr/>
                        <div className="boxcha">
                            <div className="left">
                                <img src="./img/Group5.png" alt=""/>
                                <span>101 Ko’rilgan</span>
                            </div>
                            <button className='btn'>Batafsil</button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 smolNew"
                         data-aos="zoom-in"
                         data-aos-duration="1200"
                         data-aos-easing="ease-in-sine">
                        <img src="./img/women.png" alt=""/>
                        <p>
                            Krestian Stewn Was Seen ILaving Lunch in toronto with Boyfriend
                        </p>
                        <hr/>
                        <div className="boxcha">
                            <div className="left">
                                <img src="./img/Group5.png" alt=""/>
                                <span>101 Ko’rilgan</span>
                            </div>
                            <button className='btn'>Batafsil</button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 smolNew"
                         data-aos="zoom-in"
                         data-aos-duration="1200"
                         data-aos-easing="ease-in-sine">
                        <img src="./img/men.png" alt=""/>
                        <p>
                            Krestian Stewn Was Seen ILaving Lunch in toronto with Boyfriend
                        </p>
                        <hr/>
                        <div className="boxcha">
                            <div className="left">
                                <img src="./img/Group5.png" alt=""/>
                                <span>101 Ko’rilgan</span>
                            </div>
                            <button className='btn'>Batafsil</button>
                        </div>
                    </div>

                    <div className="col-lg-3 col-6 smolNew"
                         data-aos="zoom-in"
                         data-aos-duration="1200"
                         data-aos-easing="ease-in-sine">
                        <img src="./img/women.png" alt=""/>
                        <p>
                            Krestian Stewn Was Seen ILaving Lunch in toronto with Boyfriend
                        </p>
                        <hr/>
                        <div className="boxcha">
                            <div className="left">
                                <img src="./img/Group5.png" alt=""/>
                                <span>101 Ko’rilgan</span>
                            </div>
                            <button className='btn'>Batafsil</button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 smolNew"
                         data-aos="zoom-in"
                         data-aos-duration="1200"
                         data-aos-easing="ease-in-sine">
                        <img src="./img/men.png" alt=""/>
                        <p>
                            Krestian Stewn Was Seen ILaving Lunch in toronto with Boyfriend
                        </p>
                        <hr/>
                        <div className="boxcha">
                            <div className="left">
                                <img src="./img/Group5.png" alt=""/>
                                <span>101 Ko’rilgan</span>
                            </div>
                            <button className='btn'>Batafsil</button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 smolNew"
                         data-aos="zoom-in"
                         data-aos-duration="1200"
                         data-aos-easing="ease-in-sine">
                        <img src="./img/women.png" alt=""/>
                        <p>
                            Krestian Stewn Was Seen ILaving Lunch in toronto with Boyfriend
                        </p>
                        <hr/>
                        <div className="boxcha">
                            <div className="left">
                                <img src="./img/Group5.png" alt=""/>
                                <span>101 Ko’rilgan</span>
                            </div>
                            <button className='btn'>Batafsil</button>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6 smolNew"
                         data-aos="zoom-in"
                         data-aos-duration="1200"
                         data-aos-easing="ease-in-sine">
                        <img src="./img/men.png" alt=""/>
                        <p>
                            Krestian Stewn Was Seen ILaving Lunch in toronto with Boyfriend
                        </p>
                        <hr/>
                        <div className="boxcha">
                            <div className="left">
                                <img src="./img/Group5.png" alt=""/>
                                <span>101 Ko’rilgan</span>
                            </div>
                            <button className='btn'>Batafsil</button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="galereya"
                 data-aos="fade-right"
                 data-aos-duration="1200"
                 data-aos-easing="ease-in-sine">Foto Galereya</div>
            <hr/>
            <OwlCarousel
                className="owl-theme"
                items="3"
                autoplay={true}
                autoplayTimeout="2000"
                nav={false}
                loop={true}
                dots={false}
                responsive={
                    {
                        0: {items: 2},
                        992: {items: 2},
                        1000: {items: 3}
                    }
                }>
                <div className="item">
                    <img src="./img/galerey1.png" alt=""/>
                </div>
                <div className="item">
                    <img src="./img/galerey2.png" alt=""/>
                </div>
                <div className="item">
                    <img src="./img/galerey3.png" alt=""/>
                </div>
                <div className="item">
                    <img src="./img/galerey4.png" alt=""/>
                </div>
                <div className="item">
                    <img src="./img/galerey5.png" alt=""/>
                </div>
                <div className="item">
                    <img src="./img/galerey6.png" alt=""/>
                </div>

            </OwlCarousel>

            <Footer/>
        </div>
    );
}

export default Yangiliklar;