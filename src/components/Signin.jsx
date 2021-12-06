import React from 'react';
import '../css/signin.css'
import Navbar from './Navbar';
const Signin = () => {
    return (
    <div className="fullpage">
        <Navbar isloggedIn={false} user="Alejandro"
        display="none" signin="none" background="#01a6e6"/>
    <section class="register flex-center">
        <h1>Create an account</h1>
        <form action="/src/views/register.ejs" method="POST" class="flex-center">
        <div class="email">
            <p>Name and surname</p>
            <input type="text" name="username"/>
        </div>
        <div class="email">
          <p>Email</p>
          <input type="text" name="email"/>
      </div>
      <div class="email">
          <p>Password</p>
          <input type="text" name="password"/>
      </div>
      <div class="email">
          <p>Confirm password</p>
          <input type="text" name="confirm_password"/>
      </div>
        <button class="btn">Sign up</button>
      </form>
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

export default Signin;
