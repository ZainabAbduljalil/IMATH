import React, { useState } from 'react'
import axios from 'axios'


export default function Signin() {


    // const [isUser,setIsUser]=useState(false)
    const [data,setData]=useState({})
    const [isValid,setIsValid]=useState(false)




    const handleChange=(e)=>{
        const {name,value} = e.target
        let newData = {...data,[name]:value}
          setData(newData)
          if (newData.username && newData.password){
            setIsValid(true)
          }else(setIsValid(false))
    
        }


    const handleSubmit=(event)=>{
        event.preventDefault()
        console.log(data);
        axios.post('auth/login/',data)
        .then(response=>{
            console.log('Logged In !');
            console.log(response)
            localStorage.setItem("token",response.data.key)
        })
        .catch(err=>{
            console.log("somthn went wrong",err)
        })
    }



  return (
    <div className='container-sm'>
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">username</label>
            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="username" name='username' value={data.username} onChange={handleChange}/>
          </div>

          <div className="mb-3">
            <label for="exampleFormControlInput1" className="form-label">Password</label>
            <input type="password" className="form-control" id="exampleFormControlInput1" placeholder="password" name='password' value={data.password} onChange={handleChange}/>
          </div> 

          {isValid?
             <button type='submit' className='btn btn-success'>Login</button>
            :
             <button type='submit' className='btn btn-secondary' disabled>Login</button>
        }

<div class="dropdown-divider">
  <a class="dropdown-item" href="/auth/signup">New around here? Sign up</a>
              </div>


        </form>
    </div>
  )
}
