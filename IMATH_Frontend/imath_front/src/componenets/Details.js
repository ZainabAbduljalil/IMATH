import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Details() {
  const [imath,setImath]=useState([])
  const [data,setData]=useState()
const index = 2
  // state = {
  //   imath: []
  // }

  // axios.get('/api/imath/detail/')
  useEffect(()=>{handleGet()},[])

  const handleGet =async()=>{
    try{
      const res= await axios.get('http://127.0.0.1:8000/api/imath/')
      console.log(res);
      const newIMATH=res.data
      setImath(newIMATH)
      // console.log(imath);
      // console.log("dddD",newIMATH.filter(course=>course!==2));
      // setData(newIMATH.find(course=>course.id===2))
  
    }
    catch(err){
      console.log(err)
    }
  }


  
  
  return (

    
      <div>    
        {imath.map((course)=>{return(
          <div class="card">
             <h5 class="card-header">{course.courseName}</h5>
            <div class="card-body">
              <h5 class="card-title">Instructor : {course.provider}</h5>
              <p class="card-text">Course Price: {course.price}<br/>
                               Course Location :{course.location} <br/>
                               Duration: {course.duration}</p>
            <a href="https://benefit.bh/others/fawri-plus/" class="btn btn-primary">Pay</a>
          </div>
           </div>


        )})
        }

{/* {imath?
          <div class="card">
             <h5 class="card-header">{imath[index].courseName}</h5>
            <div class="card-body">
              <h5 class="card-title">Instructor : {imath[index].provider}</h5>
              <p class="card-text">Course Price: {imath[index].price}<br/>
                               Course Location :{imath[index].location} <br/>
                               Duration: {imath[index].duration}</p>
            <a href="https://benefit.bh/others/fawri-plus/" class="btn btn-primary">Pay</a>
          </div>
           </div>
        :''} */}
      </div>
    
  )
}
