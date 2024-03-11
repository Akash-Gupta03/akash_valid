import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
  Button,
} from '@mui/material';
// import '../src/extra.css';

// const Extrafile = () => {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState('');
//   const [state, setState] = useState('');
//   const [submittedData, setSubmittedData] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newData = [name, age, state];
//     setSubmittedData([...submittedData, newData]);
//     setName('');
//     setAge('');
//     setState('');
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <div>
//           <TextField
//             type="text"
//             label="Name"
//             placeholder="Enter your Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div>
//           <TextField
//             type="number"
//             label="Age"
//             placeholder="Age"
//             value={age}
//             onChange={(e) => setAge(e.target.value)}
//           />
//         </div>
//         <div>
//           <TextField
//             type="text"
//             label="State"
//             placeholder="Enter State"
//             value={state}
//             onChange={(e) => setState(e.target.value)}
//           />
//         </div>
//         <button type="submit">Submit</button>
//       </form>

//       <TableContainer component={Paper}>
//         <Table  aria-label="simple table">
//           <TableHead>
//             <TableRow>
//               <TableCell>Name</TableCell>
//               <TableCell align="">Age</TableCell>
//               <TableCell align="">State</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {submittedData.map((row, index) => (
//               <TableRow key={index}>
//                 <TableCell component="th" scope="row">
//                   {row[0]}
//                 </TableCell>
//                 <TableCell align="">{row[1]}</TableCell>
//                 <TableCell align="">{row[2]}</TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </TableContainer>
//     </div>
//   );
// };

// export default Extrafile;







const Extrafile = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    const newName = nameInput.value;
    const newEmail = emailInput.value;
    const newPhone = phoneInput.value;

    // Create a new window
    const newWindow = window.open('', 'table', 'width=600,height=400');

    // Create a new table in the new window
    const newTable = document.createElement('table');
    const tableHead = document.createElement('thead');
    const tableBody = document.createElement('tbody');

    const headerRow = document.createElement('tr');
    const nameHeader = document.createElement('th');
    const emailHeader = document.createElement('th');
    const phoneHeader = document.createElement('th');

    nameHeader.textContent = 'Name';
    emailHeader.textContent = 'Email';
    phoneHeader.textContent = 'Phone';

    headerRow.appendChild(nameHeader);
    headerRow.appendChild(emailHeader);
    headerRow.appendChild(phoneHeader);

    tableHead.appendChild(headerRow);
    newTable.appendChild(tableHead);
    newTable.appendChild(tableBody);

    // Add a new row with the input values
    const newRow = document.createElement('tr');
    const nameCell = document.createElement('td');
    const emailCell = document.createElement('td');
    const phoneCell = document.createElement('td');

    nameCell.textContent = newName;
    emailCell.textContent = newEmail;
    phoneCell.textContent = newPhone;

    newRow.appendChild(nameCell);
    newRow.appendChild(emailCell);
    newRow.appendChild(phoneCell);

    tableBody.appendChild(newRow);

    // Append the new table to the new window
    newWindow.document.body.appendChild(newTable);

    // Clear the input fields
    nameInput.value = '';
    emailInput.value = '';
    phoneInput.value = '';
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <TextField id="name" label="Name" variant="outlined" />
        <TextField id="email" label="Email" variant="outlined" />
        <TextField id="phone" label="Phone" variant="outlined" />
        <Button type="submit" variant="contained">
          Add to Table
        </Button>
      </form>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody id="table-body"></TableBody>
      </Table>
    </div>
  );
};

export default Extrafile;
