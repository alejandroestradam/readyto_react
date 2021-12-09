import React from 'react';
import '../css/login.css';

const Login = () => {
    return (
    <div className="fullpage">
    <section class="register flex-center">
        <h1>Log In</h1>
        <form action="" method="GET">
            <figure class="email">
                <p>E-mail</p>
                <input type="text"/>
            </figure>
            <figure class="email">
                <p>Password</p>
                <input type="text"/>
            </figure>
        </form>
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
