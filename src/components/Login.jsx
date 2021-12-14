import React from 'react';
import '../css/login.css';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import { useHistory } from "react-router-dom";

const Login = (props) => {
    let history = useHistory();

    const [Values, setValues] = React.useState({
        email:'',
        password:''
    });
    const [loginValues, setloginValues] = React.useState({
        name: '',
        email:'',
        password:''
    })
    const [isLoggedIn, setisLoggedIn] = React.useState({
        status: false,
        name: '',
        token: ''
    });

    const responseGoogle = (response) => {
        if (response){
        setisLoggedIn({
            status: true,
            name: response.Au.VX,
            token: 'fisdnsfkdkjgsjien134234nkkall1234'
        });
        history.goBack();
    }
    }

    React.useEffect( () => {
        props.parentCallback(isLoggedIn);
    },[isLoggedIn, props])

    const handleChange = (event) => {
        setValues({
            ...Values,
            [event.target.name] : event.target.value
        })
    }
    const newLogin = () =>{
        const results = loginValues.filter((user) =>{
            return user.email === Values.email && user.password === Values.password;
        });
        if(results.length > 0){
            setisLoggedIn({
                status: true,
                name: results[0].name,
                token: 'fisdnsfkdkjgsjien134234nkkall1234'
            });
            props.parentCallback(isLoggedIn);
        }else{
            alert('Incorrect user or password');
        }
        history.push('/');
    }

    React.useEffect(() => {
        axios.get("./json/users.json")
        .then(res=>{
            setloginValues(res.data.users);
        }).catch(err =>{
            console.log(err);
        });
    }, []);

    return (
    <div className="fullpage">
    <section class="register flex-center">
        <h1>Log In</h1>
        <form action="" method="GET">
            <figure class="email">
                <p>E-mail</p>
                <input type="text" name="email" value={Values.email} onChange={handleChange}/>
            </figure>
            <figure class="email">
                <p>Password</p>
                <input type="text" name="password" value={Values.password} onChange={handleChange}/>
            </figure>
        </form>
        <button class="btn" onClick={newLogin}>Log in</button>
        <GoogleLogin
            clientId="622905974873-2b7vpeoj4aifmcjuvorka6uir3b5ia4f.apps.googleusercontent.com"
            buttonText="Login"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
        />
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
