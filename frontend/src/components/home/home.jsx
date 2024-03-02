// import React, { useState, useEffect } from 'react';
// import './home.css';
// import { useLocation, useNavigate, Link,useParams } from 'react-router-dom';
// import axios from 'axios'; // Import axios for making HTTP requests

// export const HOME = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [entries, setEntries] = useState([]);
//    const id=useParams("")
  
//   // console.log(id)
  


//   // Function to fetch entries from the server
//   const fetchEntries = async () => {
//     try {
//       const userID=localStorage.getItem("UserId")
//       const response = await axios.post('http://localhost:8000/api/getuser',{userId:userID}); // Make GET request to server
//       setEntries(response.data); // Update entries state with received data
//     } catch (error) {
//       console.error('Error fetching entries:', error);
//     }
//   };

//   // Fetch entries when component mounts
//   useEffect(() => {
//     fetchEntries();
//   }, []);

//   const addEntryButton = () => {
//     navigate('/addentry');
//   };

 

//   const deleteEntry = async (index) => {
//     const confirmDelete = window.confirm('Are you sure you want to delete this entry?');

//     if (confirmDelete) {
//       try {
//         // Send a DELETE request to your server's API endpoint
//         // const data= await axios.delete(`http://localhost:8000/delete/${id}`);
//         // if (data.data.success){
//         //   alert (data.data.message)
//         // }

//         // If the deletion is successful, update the state to reflect the changes
       
//       } catch (error) {
//         console.error('Error deleting entry:', error);
//       }
//     }
//   };

  

//   return (
//     <>
//       <div className="thin-lines">
//         <div className="heading">MyDiary App</div>
//         <div className="vertical-line"></div>
//         <div className="name">
//           <p className="greet">
//             Welcome {location.state && location.state.id}{' '}
//             <a className="signout" href="/login">
//               signout{' '}
//             </a>
//           </p>
//         </div>

//         <div>
//           <p className="linep">
//             List of past entries{' '}
//             <button className="line" onClick={addEntryButton}>
//               Add Entries
//             </button>
//           </p>

//           <table className="table">
//             <thead className="thead">
//               <tr>
//                 <th>Date</th>
//                 <th colSpan={3}>Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {/* Render each entry as a row in the table */}
//               {entries.map((entry,_id,index) => (
//                 <tr key={index}>
//                   <td className="cell">{entry.date}</td>
//                   <td className="linkcell">{entry.description}</td>
//                   <td className="linkcell">
//                     {/* Link to the update page with the entry ID included in the URL */}
//                     <Link to={`/update/${entry._id}`}>update</Link>
                    
//                   </td>
//                   <td className="linkcell">
//                     <button onClick={() => deleteEntry(index)}>delete</button>
//                   </td>
//                 </tr>
//               ))}
              
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </>
//   );
// };

// export default HOME;