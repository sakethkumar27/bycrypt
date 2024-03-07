import React, { useState } from 'react';
import './login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'



const LoginForm = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

 

  const handleSubmit = async(e) => {
    e.preventDefault()
    try {
     const response= await axios.post("http://localhost:8000/login",{username,password})
    const token=response.data.token
    console.log(token)
    setUsername('')
    setPassword('')
    
    alert("sucessfully loged in ")
    localStorage.setItem('token',token)

    navigate('/home')
    }
    catch (e) {
      console.error(e);


    }




  }

  return (
    <>
      <div className="thin-lines">
        <div className="heading">
          MyDiary App
        </div>
        <div className="vertical-line"></div>

        <div className="block">
          <div id="menu" className="register-form">
            <p>Login Here</p>
            <form  onSubmit={handleSubmit}>
              <div className="userNAme"> Username
                <input className="search-box" type="username"onChange={(e) => { setUsername(e.target.value) }} required />
              </div>
              <div className="passwords"> Password
                <input className="password-input-box" type="password" onChange={(e) => { setPassword(e.target.value) }} required />
              </div>
              <div>

                <button className="submit-button"  >LOGIN</button>
                <div className="links">New User? Register
                  <a className="now" href="/register"> Now</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};


export default LoginForm;