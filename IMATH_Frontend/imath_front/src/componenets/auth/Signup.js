import React, { useState } from 'react'
import axios from 'axios'
export default function Signup() {
    const [data,setData]=useState({})
    const [isValid,setIsValid]=useState(false)

    const handleChange=(e)=>{
    const {name,value} = e.target
    let newData = {...data,[name]:value}
      setData(newData)
      if (newData.password1 && (newData.password2 === newData.password1)){
        setIsValid(true)
      }else(setIsValid(false))

    }


    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(data);
        axios.post('auth/register/',data)
        .then(response=>{
            console.log(response)
        })
        .catch(err=>{
            console.log(err)
        })
    }



  return (
    <div className='container-sm'> 
    <form onSubmit={handleSubmit}>
        <h1>Signup</h1>
        <div className="mb-3">
  <label for="exampleFormControlInput1" className="form-label">Username</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="username" name='username' value={data.username} onChange={handleChange}/>
</div>
    
        <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="password" name='password1' value={data.password1} onChange={handleChange}/>
          </div>  
        <div className="mb-3">
            
            <label for="exampleFormControlInput1" className="form-label">Confirm Password</label>
            <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="Confirm password" name='password2' value={data.password2} onChange={handleChange}/>
          </div>
{isValid?
    <button type='submit' className="btn btn-primary">Register</button>
    :
    <button type='submit' className="btn btn-secondary" disabled>Register</button>
}
              </form>

              </div>
  )
}
