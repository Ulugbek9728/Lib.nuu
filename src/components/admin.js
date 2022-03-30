import React, {useState} from 'react';
import {Link} from 'react-router-dom';


import './Admin.scss'

function Admin(props) {
    const [eye, setEye] = useState(true);
    console.log(eye);

    return (
        <div className='Admin'>
            <div className="left">
                <Link to="/">
                    <button className='Asosiy'>Asosiy sahifa / Kirish</button>
                </Link>

            </div>
            <div className="right">
                <div className="title">Administrator</div>
                <div className="login">
                    <label htmlFor="login">Login</label>
                    <input type="text" id='login' className='form-control'/>
                    <img className='icon' src="./img/user-solid.svg" alt=""/>
                </div>
                <div className="login">
                    <label htmlFor="password">Password</label>
                    <input type={eye ? "password" : 'text'} id='password' className='form-control'/>
                    <img className='icon' src="./img/unlock-solid.svg" alt=""/>
                    <button onClick={()=>setEye(prevState => !prevState)}>
                        <img src={eye ? './img/eye-slash-solid.svg' :'./img/eye.svg' } alt=""/>
                    </button>
                </div>
                <button className='kirish'>Kirish</button>
            </div>
        </div>
    );
}

export default Admin;