import React, {useEffect, useState} from 'react';
import {Link} from "react-router-dom";
import ReactPaginate from 'react-paginate';
import AOS from "aos";
import "aos/dist/aos.css";

import Footer from "./footer";
import './kitoblar.scss'

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function Items({currentItems}) {
    return (
        <>
            {currentItems &&
            currentItems.map((item) => (
                <div>
                    <h3>Item #{item}</h3>
                </div>
            ))}
        </>
    );
}

function PaginatedItems({itemsPerPage}) {
    // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(items.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(items.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <>
            <Items currentItems={currentItems}/>
            <ReactPaginate
                breakLabel="..."
                nextLabel="next >"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="< previous"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

function Kitoblar(props) {

    useEffect(() => {
        AOS.init()
    });
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

                <div className="katalig"
                     data-aos="fade-right"
                     data-aos-duration="1200"
                     data-aos-easing="ease-in-sine">
                    <button data-bs-toggle="collapse" data-bs-target="#demo">
                        <label htmlFor="check">
                            <input type="checkbox" id="check"/>
                            <span></span>
                            <span></span>
                            <span></span>

                        </label>
                    </button>
                    <p>Katalog bo’yicha qidirish</p>
                </div>
                <div className="kataliglar">
                    <div id="demo" className="collapse">
                        <button>Matematika</button>
                        <button>Dasturlash</button>
                        <button>Fizika</button>
                        <button>Kimyo</button>
                        <button>Biologiya</button>
                        <button>Ijtimoiy</button>
                        <button>Tarix</button>
                        <button>Geografiya</button>
                        <button>Geologiya</button>
                        <button>Xorijiy tillar</button>
                        <button>Ekologiya</button>
                        <button>Gidrometrologiya</button>
                        <button>Sport</button>
                        <button>Iqtisodiyot</button>

                    </div>
                </div>

                <hr/>

                <div className="container-fluid">
                    <div className="row rowFluid">
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
                        <PaginatedItems itemsPerPage={3}/>
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    );
}

export default Kitoblar;