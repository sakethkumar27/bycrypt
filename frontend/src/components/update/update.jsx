import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Update = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [date, setDate] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const uuid1 = localStorage.getItem('uuid1');

      await axios.put(`http://localhost:8000/update/${id}`, { date, description }, {
        headers: {
          'x-token': token,
          
        }
      });
      
      navigate('/home');
    } catch (error) {
      console.error('Error updating entry:', error);
    }
  };

//   useEffect(() => {
//     const getEntry = async () => {
//       try {
//         const res = await axios.get(`http://localhost:8000/getuser/${id}`);
//         const { date, description } = res.data;
//         setDate(date);
//         setDescription(description);
//       } catch (error) {
//         console.error('Error fetching entry:', error);
//       }
//     };
    
//     getEntry();
//   }, [id]);

  return (
    <div>
      <h2>Update Entry</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Date:</label>
          <input type="date" name="date" value={date} onChange={(e) => setDate(e.target.value)} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <button type="submit">Update Entry</button>
      </form>
    </div>
  );
};

export default Update;
