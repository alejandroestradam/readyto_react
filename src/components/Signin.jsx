import React from 'react';
import '../css/signin.css';
//import axios from 'axios';

const Signin = (props) => {
    // eslint-disable-next-line no-unused-vars
    const [isError, setisError] = React.useState({
        name: '',
        surname:'',
        email:'',
        password:'',
        auxpassword:''
    })
    const [formValues, setformValues] = React.useState({
        body: {
            name:'',
            surname:'',
            email:'',
            password:'',
            auxpassword:''},
        userId: 1
    });

    /*const handleSubmit = (event) => {
        event.preventDefault();
        const campos = {
            ...formValues.body
        }
        // eslint-disable-next-line array-callback-return
        Object.keys(campos).map((campo) =>{
            if(!campos[campo]) {
                console.log({...isError, [campo]: true});
                setisError(prevError => ({...prevError, [campo]: true}));
                console.log(isError);
            }
        });
        axios.post('https://jsonplaceholder.typicode.com/posts', {
            formValues
          })
          .then(function (response) {
          })
          .catch(function (error) {
            console.log(error);
          });
    }*/
    const handleChange = (event) => {
        const {name, value} = event.target;
        setformValues({...formValues, body: {...formValues.body,[name]: value}});
    }
    return (
    <div className="fullpage">
    <section class="register flex-center">
        <h1>Create an account</h1>
        <form action="" method="" class="flex-center" >
        <div class="email">
            <p>Name</p>
            <input type="text" name="name" value={formValues.name} onChange={handleChange}/>
            {isError.name && "error"}
        </div>
        <div class="email">
            <p>Surname</p>
            <input type="text" name="surname" value={formValues.surname} onChange={handleChange}/>
        </div>
        <div class="email">
          <p>Email</p>
          <input type="text" name="email" value={formValues.email} onChange={handleChange}/>
      </div>
      <div class="email">
          <p>Password</p>
          <input type="text" name="password" value={formValues.password} onChange={handleChange}/>
      </div>
      <div class="email">
          <p>Confirm password</p>
          <input type="text" name="auxpassword" value={formValues.auxpassword} onChange={handleChange}/>
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
