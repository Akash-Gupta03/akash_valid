import React from 'react';

const ChildComponent = ({data, index }) => {
  if (!data) {
    return <p>Loading...</p>; // Or display a placeholder message
  }
  const { name, phone ,age} = data; // Destructure props.data
  console.log("page2",name,phone,age)
 

  return (
    <div>
      
      <h2>Data from Page1:</h2>
      <h2>Index:{index}</h2>
      <p>Name: { name}</p>
      <p>Phone: {phone}</p>
      <h1>Age:{age}</h1>
    </div>
  );
};
export default ChildComponent;