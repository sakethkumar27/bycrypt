import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Viewentry = () => {
  const { id } = useParams();
  const [entry, setEntry] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/viewentry/${id}`);
        setEntry(response.data);
      } catch (error) {
        console.error('Error fetching entry:', error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <>
      <h1>View Entry</h1>
      <h2>Date: {new Date(entry.date).toLocaleDateString('en-GB')}</h2>
      <h2>Description: {entry.description}</h2>
      <button onClick={() => navigate('/home')}>Back to Home</button>
    </>
  );
};

export default Viewentry;
