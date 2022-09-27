import React, { useState } from 'react';
import axios from 'axios';

const Blog = () => {
    const[data,setData] = useState({title:'', body:''});
    
const chng = (e)=>{
    setData({...data,[e.target.name]:e.target.value})
}

    const sub =(e)=>{
        e.preventDefault()
        axios.post('http://localhost:4500/api/postData',data).then((res)=>{
            console.log(res.data.data.storeData)

        }).catch((error)=>{
            console.log(error)
        })

    }
  return (
    <div>
        <form onSubmit={sub}>
        <label>Title:</label>
        <input type="text" name="title" value={data.title} onChange={chng} />
        <label>Body:</label>
        <input type="text" name="body" value={data.body} onChange={chng} />
        <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default Blog