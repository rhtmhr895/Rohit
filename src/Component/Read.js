import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Read = () => {
    const[read,setRead] = useState([]);
    useEffect(()=>{
    axios.get('http://localhost:4500/api/getData').then((response)=>{
        setRead(response.data)
    })

    })
  return (
    <div>
        <h1>{read.title}</h1>
        <p>{read.body}</p>
        <button type='submit'>Edit</button>
        <button type='submit'>Delete</button>
        
    </div>
  )
}

export default Read