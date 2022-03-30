import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import {Parallax} from 'react-parallax';
import CountUp from 'react-countup';
import AOS from "aos";
import "aos/dist/aos.css";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.min.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import img1 from './img/unsplash_HDxZIoiuhYk.png'
import "./main.scss";
import Footer from "./components/footer";


function Main(props) {
    useEffect(() => {
        AOS.init()
    });

    return (
        <>
            <div className="main">
                <div className="CaruselBox">
                    <img src="img/1.png" alt=""/>
                    <img src="img/2.png" alt=""/>
                    <img src="img/3.png" alt=""/>

                </div>
                <div className="box">
                    <div className="line">
                        <nav className="navbar navbar-expand-md">
                            <a href="https://nuu.uz/" className="navbar-brand" target="_blank">
                                <img src="./img/logo_Milliy.svg" alt=""/>
                            </a>
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
                                        <Link to="#" target='_blank'>
                                            <button className='btn'>Kitob buyurtma</button>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Yangiliklar">
                                            <button className='btn'>Yangiliklar</button>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="#">
                                            <button className='btn'>Uzb</button>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/Admin">
                                            <button className='btn'>Kirish</button>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </nav>
                        <div className="libLogo">
                            <img src="./img/logo_lib.svg" alt=""/>
                        </div>
                        <div className="serch">
                            <input className="" type="text" placeholder="Kitob qidiring"/>
                            <button className="btn">
                                <img src="./img/shape.svg" alt=""/>
                            </button>

                        </div>
                        <div className="title">
                            Mirzo ulug’bek nomidagi O’zbekiston milliy universiteti kutubxonosining rasmiy veb sayti, 70
                            mingdan ziyod elektron kitoblar mavjud.
                        </div>
                    </div>
                </div>
                <div className="Kitoblar">
                    <div className="title"
                         data-aos="fade-right"
                         data-aos-duration="1200"
                         data-aos-easing="ease-in-sine">
                        Eng ko’p qidirilgan kitoblar
                    </div>
                    <hr/>
                </div>
                <div className="container-fluid">
                    <div className="row rowFluid">
                        <div className="col-lg-6"
                         data-aos="fade-right"
                         data-aos-duration="1000"
                         data-aos-easing="ease-in-sine">
                            <div className="Kitob_card">
                                <div className="boxcha">
                                    <div className="left">
                                        <img src="./img/Rectangle17.png" alt=""/>
                                    </div>
                                    <div className="right">
                                        <div className="title">Maks fray</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
                                            assumenda commodi consequatur, dicta dignissimos dolor est exercitationem
                                            expedita hic inventore ipsam labore !
                                        </p>
                                        <img src="./img/QR_code_for_mobile_English_Wikipedia.svg.png" alt=""/>
                                    </div>
                                </div>
                                <hr/>
                                <div className="downloadFooter">
                                    <div className="left">
                                        <img src="./img/Group5.png" alt=""/>
                                        <span>101</span> yuklab olingan
                                    </div>
                                    <div className="right">
                                        <button className="btn">Yuklab olish</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6"
                         data-aos="fade-left"
                         data-aos-duration="1200"
                         data-aos-easing="ease-in-sine">
                            <div className="Kitob_card">
                                <div className="boxcha">
                                    <div className="left">
                                        <img src="./img/Rectangle22.png" alt=""/>
                                    </div>
                                    <div className="right">
                                        <div className="title">Moy put</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
                                            assumenda commodi consequatur, dicta dignissimos dolor est exercitationem !
                                        </p>
                                        <img src="./img/QR_code_for_mobile_English_Wikipedia.svg.png" alt=""/>
                                    </div>
                                </div>
                                <hr/>
                                <div className="downloadFooter">
                                    <div className="left">
                                        <img src="./img/Group5.png" alt=""/>
                                        <span>101</span> yuklab olingan
                                    </div>
                                    <div className="right">
                                        <button className="btn">Yuklab olish</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6"
                         data-aos="fade-right"
                         data-aos-duration="1200"
                         data-aos-easing="ease-in-sine">
                            <div className="Kitob_card">
                                <div className="boxcha">
                                    <div className="left">
                                        <img src="./img/Rectangle17.png" alt=""/>
                                    </div>
                                    <div className="right">
                                        <div className="title">Maks fray</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
                                            assumenda commodi consequatur, dicta dignissimos dolor est exercitationem
                                            expedita hic inventore ipsam labore !
                                        </p>
                                        <img src="./img/QR_code_for_mobile_English_Wikipedia.svg.png" alt=""/>
                                    </div>
                                </div>
                                <hr/>
                                <div className="downloadFooter">
                                    <div className="left">
                                        <img src="./img/Group5.png" alt=""/>
                                        <span>101</span> yuklab olingan
                                    </div>
                                    <div className="right">
                                        <button className="btn">Yuklab olish</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6"
                         data-aos="fade-left"
                         data-aos-duration="1200"
                         data-aos-easing="ease-in-sine">
                            <div className="Kitob_card">
                                <div className="boxcha">
                                    <div className="left">
                                        <img src="./img/Rectangle22.png" alt=""/>
                                    </div>
                                    <div className="right">
                                        <div className="title">Moy put</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
                                            assumenda commodi consequatur, dicta dignissimos dolor est exercitationem !
                                        </p>
                                        <img src="./img/QR_code_for_mobile_English_Wikipedia.svg.png" alt=""/>
                                    </div>
                                </div>
                                <hr/>
                                <div className="downloadFooter">
                                    <div className="left">
                                        <img src="./img/Group5.png" alt=""/>
                                        <span>101</span> yuklab olingan
                                    </div>
                                    <div className="right">
                                        <button className="btn">Yuklab olish</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6"
                         data-aos="fade-right"
                         data-aos-duration="1200"
                         data-aos-easing="ease-in-sine">
                            <div className="Kitob_card">
                                <div className="boxcha">
                                    <div className="left">
                                        <img src="./img/Rectangle17.png" alt=""/>
                                    </div>
                                    <div className="right">
                                        <div className="title">Maks fray</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
                                            assumenda commodi consequatur, dicta dignissimos dolor est exercitationem
                                            expedita hic inventore ipsam labore !
                                        </p>
                                        <img src="./img/QR_code_for_mobile_English_Wikipedia.svg.png" alt=""/>
                                    </div>
                                </div>
                                <hr/>
                                <div className="downloadFooter">
                                    <div className="left">
                                        <img src="./img/Group5.png" alt=""/>
                                        <span>101</span> yuklab olingan
                                    </div>
                                    <div className="right">
                                        <button className="btn">Yuklab olish</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6"
                         data-aos="fade-left"
                         data-aos-duration="1200"
                         data-aos-easing="ease-in-sine">
                            <div className="Kitob_card">
                                <div className="boxcha">
                                    <div className="left">
                                        <img src="./img/Rectangle22.png" alt=""/>
                                    </div>
                                    <div className="right">
                                        <div className="title">Moy put</div>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
                                            assumenda commodi consequatur, dicta dignissimos dolor est exercitationem !
                                        </p>
                                        <img src="./img/QR_code_for_mobile_English_Wikipedia.svg.png" alt=""/>
                                    </div>
                                </div>
                                <hr/>
                                <div className="downloadFooter">
                                    <div className="left">
                                        <img src="./img/Group5.png" alt=""/>
                                        <span>101</span> yuklab olingan
                                    </div>
                                    <div className="right">
                                        <button className="btn">Yuklab olish</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn barchasi">
                            <Link to="/Kitoblar"> Barchasini korish</Link>
                        </button>

                        <div className="titleYangi">Yangiliklar</div>
                    </div>
                </div>
                <hr/>
                <div className="container-fluid">
                    <div className="row rowFluid">
                        <div className="col-xl-6 col-12 yangilikBox">
                            <div className="yangilik">
                                <div className="ten">
                                    <p>Meet the family keeping
                                        Lisbon’s classic car flame
                                        burning
                                    </p>
                                    <p>When a miltary coup turned Portugal opsida down in
                                        1974, it marked the down of democracy for the
                                        previcusiy autoritarian nation
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-12 Yangiliklar">
                            <div className="row">
                                <div className="col-6 right">
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
                                <div className="col-6 right">
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
                                <div className="col-6 right">
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
                                <div className="col-6 right">
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
                    </div>
                </div>

                <Parallax bgImage={img1} className="parallax" strength={300}>
                    <div className="statistika">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-3 col-6">
                                    <CountUp
                                        start={0}
                                        end={695}
                                        delay={0}
                                        duration={3}
                                    >

                                        {({countUpRef}) => (
                                            <p className="CountUp" ref={countUpRef}></p>
                                        )}
                                    </CountUp>
                                    <p className="barcha">Umumiy kitobxonlar soni</p>
                                </div>
                                <div className="col-md-3 col-6">
                                    <CountUp
                                        start={0}
                                        end={753}
                                        delay={0}
                                        duration={3}
                                    >

                                        {({countUpRef}) => (

                                            <p className="CountUp" ref={countUpRef}></p>
                                        )}
                                    </CountUp>
                                    <p className="barcha">Axborat-resurs markazi fondi</p>
                                </div>
                                <div className="col-md-3 col-6">
                                    <CountUp
                                        start={0}
                                        end={813}
                                        delay={0}
                                        duration={3}
                                    >

                                        {({countUpRef}) => (

                                            <p className="CountUp" ref={countUpRef}></p>
                                        )}
                                    </CountUp>
                                    <p className="barcha">Elektron resurslar soni</p>
                                </div>
                                <div className="col-md-3 col-6">
                                    <CountUp
                                        start={0}
                                        end={561}
                                        delay={0}
                                        duration={3}
                                    >

                                        {({countUpRef}) => (

                                            <p className="CountUp" ref={countUpRef}></p>
                                        )}
                                    </CountUp>
                                    <p className="barcha">Eng ko'p resurslar</p>
                                </div>
                            </div>
                        </div>
                        <div className="numberStatic"></div>
                    </div>
                </Parallax>
                <div className="galereya">Foto Galereya</div>
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
                        {0:{items:2},
                        992:{items:2},
                        1000:{items:3}}
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

            </div>

            <Footer/>
        </>

    );
}

export default Main;