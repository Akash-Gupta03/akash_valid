// import axios from 'axios';
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert from '@mui/material/Alert';

// const Loginpage = () => {
//   const Navigate = useNavigate();
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     // Perform the API call here if needed
//     axios.get("https://localhost:7199/api/Newone2/")
//       .then((response) => {
//         console.log(response.data);

//         // Check if email and password match the data from the API
//         const user = response.data.find((user) => user.email === email && user.password === password);
//         if (user) {
//           // Valid credentials

//           Navigate("/");
//           console.log("Successfull Login");
//           handleOpenSnackbar('Successfull Login ', 'success');
//         } else {
//           // Invalid credentials
//           console.log("Invalid credentials");
//           handleOpenSnackbar('Invalid credentials', 'error');
//         }

//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   const [open, setOpen] = useState(false);
//   const [message, setMessage] = useState('');
//   const [severity, setSeverity] = useState('success');


//   const handleOpenSnackbar = (message, severity) => {
//     setMessage(message);
//     setSeverity(severity);    
//     setOpen(true);
//   };

//   const handleCloseSnackbar = () => {
//     setOpen(false);
//   };

//   return (
//     <div>
// <div className='container'>
// <div className='row'>
//   <div className='col-sm-8 col-md-8'>





//   <div className='container text-center'>
//         <form onSubmit={handleSubmit}>
//           <h2 className='text-center mt-5'>Login to Your Account</h2>
//           <p text-center> Login using social networks </p>

//           <div className='col-sm-12 mt-4'>
//             <input type='email' placeholder='email' name='email' id='email' required onChange={(e) => setEmail(e.target.value)} /><br />
//           </div>

//           <div className='col-sm-12 mt-4'>
//             <input type='text' placeholder='password' name='password' required onChange={(e) => setPassword(e.target.value)} />
//           </div>



//           <div className='col-sm-12 mt-4'>
//             <button type='submit'>Click here</button>
//           </div>

//           <a href='/try'>For sign-up</a>
//         </form>
//         <Snackbar open={open} autoHideDuration={6000} onClose={handleCloseSnackbar}>
//                 <MuiAlert elevation={6} variant="filled" severity={severity}>
//                   {message}
//                 </MuiAlert>
//               </Snackbar>
//       </div>
//      </div>
//   <div className='col-sm-4 col-md-4'></div>
// </div>

// </div>



//     </div>
//   );
// };

// export default Loginpage;




import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import MUIDataTable from "mui-datatables";

const Loginpage = () => {
    const [datas, setDatas] = useState([])


    function getData() {
        axios.get('https://localhost:7199/api/Newone2').then((response) => {
            console.log(response.data)
            setDatas(response.data);
        });
    }

    useEffect(()=>{
        getData();
    },[])
      
   

    const handleDelete = (id) => {
        axios.delete(`https://localhost:7199/api/Newone2/${id}`)
            .then(() => {
                getData();
            })
    }

    // const columns = ["id","name", "phone", "email", "password"];
    const options = {
        selectableRows:false,
        filterType: 'checkbox',
        rowsPerPage:5,
        rowsPerPageOptions:[5,10,15],
        download:false,
        print:false,
        search:false,
        viewcolumn:false,
        filter:false,
        viewColumns:false,

      };
      const columns = [
        {
         name: "id",
         label: "ID",
         options: {
          filter: true,
          sort: true,
         }
        },
        {
         name: "name",
         label: "Name",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
            name: "phone",
            label: "Phone",
            options: {
             filter: true,
             sort: false,
            }
           },
        {
         name: "email",
         label: "Email",
         options: {
          filter: true,
          sort: false,
         }
        },
        {
         name: "password",
         label: "Password",
         options: {
          filter: false,
          sort: false,
         }
        },
       ];
       




    return (
        <div>
            <h1 className='text-center'>Display Data</h1>
<div className='text-center'>
<a href='/' className='btn btn-primary table-bordered table-striped mt-2 table-hover  justify-content-center' >Create Data</a></div>

            <div className='col-md-12 mt-3'>
                {/* <table className='table table-bordered table-striped table-danger table-hover'>
                    <thead>
                        <tr>
                            <th>ID</th> 
                            <th>Name</th>

                            <th>Phone</th>
                            <th>Email</th>
                            <th>password</th>
                            <th>Edit</th>
                            <th>Delete</th>
                        </tr>

                    </thead>
                    <tbody>
                        {datas.map((data) => {
                            return (
                                <>
                                    <tr>
                                        <td>{data.id}</td>
                                        <td>{data.name}</td>
                                        <td>{data.phone}</td>
                                        <td>{data.email}</td>
                                        <td>{data.password}</td>
                                        <td>
                                        <Link to={`/edit/${data.id}` }className='btn btn-primary'>Edit</Link>


                                            
                                            </td>
                                        <td><button className='btn btn-secondary' onClick={() =>{if(window.confirm('Are you Sure??')){handleDelete(data.id)}} }>Delete</button></td>

                                    </tr>
                                </>
                            );
                        })}

                    </tbody>
                </table> */}

            
                <MUIDataTable  
              title={"Employee List"}
              data={datas}
              canSearch={false}
            //   isSorted
              noEndBorder
              columns={columns}
              options={options}
             
                />
            </div>
        </div>
    )
}

export default Loginpage
