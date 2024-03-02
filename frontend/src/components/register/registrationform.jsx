import React, { useState, useEffect } from 'react'
import './registrationform.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'




const RegistrationForm = () => {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const navigate = useNavigate()

  useEffect(() => {
    fetchUsers()
  }, [])

 const fetchUsers=()=>{
  axios.get("http://localhost:8000/register")
  .then(res => console.log(res.data))
  .catch(err => { console.error(err) })
 } 


  const handleSubmit = (e) => {

    e.preventDefault();
    axios
    .post('http://localhost:8000/register', {  username, password })
    .then(() => {
        alert('Registration Successful')
       
        setUsername('')
        setPassword('')
        fetchUsers();
        navigate('/login')
    })
    .catch((error) => {
        console.log('Unable to register user')
    })
    

  }


  return (
    <>
      <div className="thin-lines">
        <div className="heading">
          MyDiary App
        </div>
        <div className="vertical-line"></div>
        <div className="signup-block">
          <div id="menu" className="registration-form">
            <p>Registration Form</p>

            <form method="POST" onSubmit={handleSubmit}>

              <div className="username"> Username
                <input className="search" type="search-box" onChange={(e) => { setUsername(e.target.value) }} required />
              </div>
              <div className="password"> Password
                <input className="password-input" type="password" onChange={(e) => { setPassword(e.target.value) }} required />
              </div>
              <div>
                <button className="register-button" type="submit">Register</button>

                <div className="link">Existing User? login
                  <a href="/login">here</a>
                </div>

              </div>
            </form>
          </div>
        </div>
      </div>

    </>








  )



};



export default RegistrationForm;
