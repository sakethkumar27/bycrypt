// import React, { useState } from 'react';
// import "./addentry.css";
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';

// export const Entry = () => {
//   const [date, setDate] = useState('');
//   const [description, setDescription] = useState('');
//   //const [userid,setuserid]=useState("")
 
//   const navigate = useNavigate();

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const userId=localStorage.getItem("UserId");
//       const res = await axios.post('http://localhost:8000/addentry', {userId,date, description});

//       if (res.data === "fill") {
//         alert('Please fill in both date and description');
//       } 
//       else {
//         console.log("date:", res.data.date);
//         console.log("description:", res.data.description);
//         //console.log("userid :",userid)

//         // Navigate to the home page after 5 seconds
//         setTimeout(() => {
//           navigate('/home');
//         }, 100);
//       }

//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <>
//       <h1>Add Entry</h1>
//       <form onSubmit={handleSubmit} method="post">
//         <p>Date</p>
//         <input type="date" id="date" placeholder="Date" value={date} onChange={(e) => setDate(e.target.value)} required />
//         <div>
//           <textarea id="description" rows="5" placeholder="Your Message" value={description} onChange={(e) => setDescription(e.target.value)}  required></textarea>
//         </div>
//         <button type="submit">Add Entry</button>
//       </form>
//     </>
//   );
// }

// export default Entry;