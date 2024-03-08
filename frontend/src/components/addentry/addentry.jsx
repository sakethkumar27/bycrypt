import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Entry = () => {
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');
 // const [uuid, setUuid] = useState('');
  
  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
     // Get the JWT token from localStorage
       const res = await axios.post(
        'http://localhost:8000/addentry',
        { date, description },
        { headers: { 'x-token': token } } // Include the token in the request headers with 'x-token' header
      );

     
      localStorage.setItem('uuid',res.data.uuid1)
      //setUuid1(res.data.uuid1);
      navigate('/home'); // Navigate to the home page after successful entry addition
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h1>Add Entry</h1>
      <form onSubmit={handleSubmit} method="post">
        <p>Date</p>
        <input type="date" id="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} required />
        <div>
          <textarea id="description" rows="5" placeholder="Your Message" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        </div>
        <button type="submit">Add Entry</button>
      </form>
    </>
  );
};

export default Entry;
