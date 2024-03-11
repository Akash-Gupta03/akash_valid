import React, { useState } from 'react';
import ChildComponent from './page2';

const Page1 = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [age, setAge] = useState('');
  const [childComponentData, setChildComponentData] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    // Create an object to hold the data
    const data = { name, phone ,age};

    // Pass the data as props to ChildComponent
    setChildComponentData(prevData => [
      ...prevData,
      {
        index: prevData.length + 1,
        data: data
      }
    ]); // <-- Render and pass data
    // console.log(data)
   

    // (Optional) Clear the form fields after submission
    setName('');
    setPhone('');
    setAge('');
  };
  // const changeData = () => {
  //   setChildComponentData(previousData => {
  //     // Modify previousData or return a new value based on it
  //     const newData = { ...previousData, additionalKey: 'additionalValue' };
  //     return newData;
  //   });
  // };


  return (
    
    <div>                                                                  
      {/* {childComponentData && <ChildComponent data={childComponentData} />} */}
      {childComponentData.map(item => (
        <ChildComponent key={item.index} data={item.data} index={item.index} />
      ))}

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
        />
        <input
          type="text"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          placeholder="Phone"
        />
          <input
          type="text"
          name="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          placeholder="age"
        />
        <button type="submit">Submit</button>

      </form>
    </div>
  );
};

export default Page1;