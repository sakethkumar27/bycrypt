import React, { useState, useEffect } from 'react';
import './home.css';
import { useLocation, useNavigate, Link, useParams } from 'react-router-dom';
import axios from 'axios'; // Import axios for making HTTP requests

export const HOME = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [entries, setEntries] = useState([]);




  // console.log(id)



  // Function to fetch entries from the server
  const fetchEntries = async () => {
    try {
      const token = localStorage.getItem('token');
      const uuid1 = localStorage.getItem('uuid1')// Get the JWT token from localStorage
      const response = await axios.post('http://localhost:8000/api/getuser', { uuid1 }, { headers: { 'x-token': token } }); // Make POST request to server with UUID in the request body and token in headers
      console.log(response.data)
      setEntries(response.data); // Update entries state with received data
    } catch (error) {
      console.error('Error fetching entries:', error);
    }
  };

  useEffect(() => {
    fetchEntries();
  }, [])
  const addEntryButton = () => {
    navigate('/addentry');
  };


  const deleteEntry = async (id) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this entry?');
    if (confirmDelete) {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:8000/deleteentry/${id}`, { headers: { 'x-token': token } });
            // Remove the deleted entry from the state
            setEntries(entries.filter(entry => entry._id !== id));
            console.log('Entry deleted successfully');
        } catch (error) {
            console.error('Error deleting entry:', error);
        }
    }
};



  return (
    <>
      <div className="thin-lines">
        <div className="heading">MyDiary App</div>
        <div className="vertical-line"></div>
        <div className="name">
          <p className="greet">
            Welcome {location.state && location.state.id}{' '}
            <a className="signout" href="/login">
              signout{' '}
            </a>
          </p>
        </div>

        <div>
          <p className="linep">
            List of past entries{' '}
            <button className="line" onClick={addEntryButton}>
              Add Entries
            </button>
          </p>

          <table className="table">
            <thead className="thead">
              <tr>
                <th>Date</th>
                <th colSpan={3}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* Render each entry as a row in the table */}
              {entries.map((entry, _id, index) => (
                <tr key={index}>
                  <td className="cell">{new Date(entry.date).toLocaleDateString('en-GB')}</td>
                  <td className="linkcell"><Link to={`/viewentry/${entry._id}?date=${entry.date}&description=${entry.description}`}>View</Link>

                  </td>
                  <td className="linkcell">
                    {/* Link to the update page with the entry ID included in the URL */}
                    <Link to={`/update/${entry._id}`}>update</Link>

                  </td>
                  <td className="linkcell">
                  <Link to={`/delete/${entry._id}`}>delete</Link>
                  </td>
                </tr>
              ))}

            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default HOME;