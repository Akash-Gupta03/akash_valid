import React, { useState } from 'react'
import Props2page from './props2'

const Propspage = () => {

const[name,setName] =useState("")
const[password,setPassword] =useState("")
const[store,setStore] =useState("")

const handleSubmit=(e)=>{
  e.preventDefault();
 const data={name,password}
setStore(data)


setName('')
setPassword('')
}

  return (
 
<>

{ store && <Props2page   data={store} />}
<form onSubmit={handleSubmit}>
<input type='text' name='name' placeholder='name' onChange={(e) => setName(e.target.value)}       value={name}/>
<input type='text' name='password' placeholder='password' onChange={(e) => setPassword(e.target.value)}       value={password}/>
<button type='submit'>click me</button>




</form>

</>
  )
}

export default Propspage
