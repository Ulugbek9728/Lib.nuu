import React from 'react';
import {Link} from 'react-router-dom';
import { YMaps, Map,Placemark } from 'react-yandex-maps';

import './footer.scss'

function Footer(props) {
    return (
        <div className="footer">
            <div className="logo">
                <img src="../img/logo_lib.svg" alt=""/>
            </div>
           <div className="container-fluid">
               <div className="row">
                   <div className="karta col-3">
                       <img src="../img/logo Milliy  2 (Traced).png" alt=""/>
                   </div>
                   <div className="karta col-3">
                       <div className='box'>
                           <Link to="/Kitoblar">Kitoblar</Link>
                       </div>
                       <div className='box'>
                           <Link to="/Yangiliklar">Biz Haqimizda</Link>
                       </div>
                       <div className='box'>
                           <Link to="/Yangiliklar">Yangiliklar</Link>
                       </div>
                       <div className='box'>
                           <Link to="#">O'zbek</Link>
                       </div>
                   </div>
                   <div className="karta col-3">
                       <div className="box">
                           <a href="#">
                               <img src="../img/Group 60.png" alt=""/>
                               <div>Toshkent. sh, Olmazor. t, Universitet. k, 4-uy</div>
                           </a>
                       </div>
                       <div className="box">
                           <a href="tel:+998945770082">
                               <img src="../img/Vector.png" alt=""/>
                               <div>+99894 577 00 82</div>
                           </a>
                       </div>
                       <div className="box">
                           <a href="">
                               <img src="../img/Group 61.png" alt=""/>
                               <div>arm.nuu@gmail.com</div>
                           </a>
                       </div>
                   </div>
                   <div className="karta col-3">
                       <YMaps>
                           <div>
                               <Map className="maps"
                                    defaultState={{
                                        center: [41.350418, 69.205709],
                                        zoom: 15,
                                    }}>
                                   <Placemark geometry={[41.350418, 69.205709]}/>
                               </Map>
                           </div>
                       </YMaps>
                   </div>
               </div>
           </div>
            <div className="bottomFooter">
                <div className="text">
                    Axborot texnologiyalar markazi 2022
                </div>
                <a href="#" target="_blank">
                    <img src="../img/Creative bro.svg" alt=""/>
                </a>
            </div>
        </div>
    );
}

export default Footer;