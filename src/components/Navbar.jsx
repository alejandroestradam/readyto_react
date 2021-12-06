import React from 'react';
import '../css/navbar.css';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
    const isLoggedIn = props.isloggedIn;
    const username = props.user;

    return (
        <nav className="navbar" style={{backgroundColor: props.background}}>
        <div class="logo">
            <NavLink to="/" className="imglogo"/>            
            <h1>ReadyTo</h1>
        </div>
        <div id="search" class="flex-center" style={{display: props.display}}>
            <div class="search">
                <input class="input" type="text"/>
                <button class="btn" id="search-btn"></button>
            </div>
        </div>
        <div id="login">
            {isLoggedIn 
            ?
            <div className="loginTrue">
                <p>Welcome back {username}!</p>
                <img className="user" src="https://img.icons8.com/fluency-systems-regular/96/000000/user.png" width="30px" height="30px" alt="link"/>
            </div>
            : 
            <div class="loginFalse">
                <div class="drop">
                    {/*<button class="link">
                        <img src="https://img.icons8.com/material-outlined/96/000000/menu--v1.png" alt="link"/>
                    </button>
                    <div class="dropdown-menu">
                        <NavLink to="/signin">Sign in</NavLink>
                        <NavLink to="/login">Log in</NavLink>
                    </div>*/}
                <NavLink to="/signin" className="links" style={{display: props.signin}}>Sign in</NavLink>
                <NavLink to="/login" className="links" style={{display: props.login}}>Log in</NavLink>
                </div>
                <img className="user" src="https://img.icons8.com/fluency-systems-regular/96/000000/user.png" width="30px" height="30px" alt="link"/>
            </div>
             }
        </div>
    </nav>
    )
}

export default Navbar;
