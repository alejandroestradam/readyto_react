import React from 'react';
import '../css/login.css';
import Navbar from './Navbar';

const Login = () => {
    return (
    <div className="fullpage">
        <Navbar isloggedIn={false} user="Alejandro"
        display="none" login ="none" background="#01a6e6"/>
    <section class="register flex-center">
        <h1>Log In</h1>
        <figure class="email">
            <p>E-mail</p>
            <input type="text"/>
        </figure>
        <figure class="email">
          <p>Password</p>
          <input type="text"/>
      </figure>
        <button class="btn">Log in</button>
        <div class="terms flex-center">
            <p>By logging in or creating an account, you agree to our Terms and
                 Terms and Privacy Policy
            </p>
        </div>
        <div class="readyto flex-center">
           <p>All rights reserved</p>
            <p>ReadyTo.com 2021</p>
        </div>
    </section>
    </div>
    )
}

export default Login;
