
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../styles/extra.css'
import { Card } from '@mui/material';
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const Edit = () => {
    const {id} =useParams();
    const Navigate = useNavigate();
    const [datas, setDatas] = useState({   
        id:id,
        name: "",
    email: "",
    phone: "",
    password: ""})


//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: ""
//   });
//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post( 'https://localhost:7199/api/Newone2/CreateField', formData);
//       console.log("Post created:", response.data);
//     } catch (error) {
//       console.error("Error creating post:", error);
//     }
//   };




  function getData() {
    axios.get('https://localhost:7199/api/Newone2/'+id).then((response) => {
        console.log(response)
        // setDatas(...datas, );
        setDatas(response.data);
    });
}

useEffect(()=>{
    getData();
},[])

const handleSubmit=(e)=>{
    e.preventDefault();
    axios.put('https://localhost:7199/api/Newone2/'+id,datas).then((res)=>{

    setDatas(res.data)
    Navigate('/login')
    })

    
     
}





  return (
    <div>
      {/* <Grid container spacing={2}>


        <Grid className='text-wraps' item xs={12} sm={6} md={6} lg={3} >
          <Card sx={{ maxWidth: 345 }}>
            <h2 className='text-wraps'>xs=8dfffffffffff fffff fffffffffff</h2>
          </Card>
        </Grid>
        <Grid className='text-wraps' item xs={12} sm={6} md={6} lg={3}  >
          <Card sx={{ maxWidth: 345 }}>
            <h2 className='text-wraps'>xs=4dfdddfdddddddddddd ddddddd</h2>
          </Card>
        </Grid>
        <Grid className='text-wraps' item xs={12} sm={6} md={6} lg={3}  >
          <Card sx={{ maxWidth: 345 }}>
            <h2 className='text-wraps'>xs=8dffffffff fffffffffff ffffffff</h2>
          </Card>
        </Grid>
      </Grid> */}

      <div className='container text-center'>
        <form onSubmit={handleSubmit}>
          <h2 className='text-center mt-5'>Edit Form</h2>
          <div className='col-sm-12 mt-4'>
            <input type='text' placeholder='name' name='name' required  value={datas.name} onChange={e =>setDatas({...datas,name:e.target.value })}/><br />

          </div>
          <div className='col-sm-12 mt-4'>
            <input type='number' placeholder='phone' name='phone' required value={datas.phone} onChange={e =>setDatas({...datas,phone:e.target.value })}/><br />

          </div>
          <div className='col-sm-12 mt-4'>
            <input type='email' placeholder='email' name='email' required  value={datas.email} onChange={e =>setDatas({...datas,email:e.target.value })}/><br />

          </div>

          <div className='col-sm-12 mt-4'>
            <input type='text' placeholder='password' name='password' required  value={datas.password} onChange={e =>setDatas({...datas,password:e.target.value })}/>
          </div>


          <div className='col-sm-12 mt-4'>
            <button type='submit' > click here</button>
          </div>
          <a href='/login' >click for login</a>
        </form>
      </div>

    </div>
  )
}

export default Edit;
