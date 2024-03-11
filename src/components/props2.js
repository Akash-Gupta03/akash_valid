import React from 'react'

const Props2page = ({ data }) => {

  const {name,password}=data;
  console.log(name,password)
  return (
    <div>
        <h1>data coming:{name}</h1>
        <h1>data coming:{password}</h1>



    </div>
  )
}

export default Props2page
