import React from 'react';
import '../css/navbar.css';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';
import { propsPath } from './helpers/constants';


const Navbar = (props) => {
    const isLoggedIn = false;
    const username = props.user;
    const [caseProps, setcaseProps] = React.useState('');
    let path = props.location.pathname;

    React.useEffect(() =>{
        switch (path) {
            case '/':
                setcaseProps(propsPath[0]);
                break;
            case '/signin':
                setcaseProps(propsPath[1]);
                break;
            case '/login':
                setcaseProps(propsPath[2]);
                break;
            case '/properties':
                setcaseProps(propsPath[3]);
                break;
            case '/addproperty':
                setcaseProps(propsPath[3]);
                break;
            default:
                break;
        };
        
       
    }, [path]);

    return (
        <nav className="navbar" style={{backgroundColor: caseProps.background}}>
        <div class="logo">
            <NavLink to="/" className="imglogo"/>            
            <h1>ReadyTo</h1>
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
                <NavLink to="/signin" className="links" style={{display: caseProps.signin}}>Sign in</NavLink>
                <NavLink to="/login" className="links" style={{display: caseProps.login}}>Log in</NavLink>
                </div>
                <img className="user" src="https://img.icons8.com/fluency-systems-regular/96/000000/user.png" width="30px" height="30px" alt="link"/>
            </div>
             }
        </div>
    </nav>
    )
}

export default withRouter(Navbar);
