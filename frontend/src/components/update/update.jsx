// import React, { useState, useEffect } from 'react';
// import { useParams,useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Update = () => {
//   const { id } = useParams("");
//   console.log(id) // Get the entry ID from the URL params
//   const [date,Setdate]=useState()
//   const [description,Setdescription]=useState()
//   const navigate = useNavigate();


//   const getdata=async()=>{
//    const res=await fetch('http://localhost:8000/getuser/'+id,{
//     method:"GET",
//     headers:{
//       "Content-Type":"application/json"
//     }
//    });
//    const data=await res.json();
//    console.log(data);
//    if(res.status===422||!data){
//     console.log("errro")
//    }
//    else{
//     console.log("data")
//    }
   
//   }
// getdata()

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await axios.put(`http://localhost:8000/update/`+id, {date,description})
//     .then(result=>{
//       console.log(result)
//       console.log(date,description)
//       setTimeout(() => {
//         navigate('/home');
//       }, 100);
      
//     })
//     .catch(err=>console.error(err))
      
    
     
//       // console.error('Error updating entry:', error);
   
    
//   };

//   return (
//     <div>
//       <h2>Update Entry</h2>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <label>Date:</label>
//           <input type="date" name="date" value={date} onChange={(e)=>Setdate(e.target.value)} required />
//         </div>
//         <div>
//           <label>Description:</label>
//           <textarea name="description" value={description} onChange={(e)=>Setdescription(e.target.value)}  required/>
//         </div>
//         <button type="submit">Update Entry</button>
//       </form>
//     </div>
//   );
// };

// export default Update;
