// App.js
import React, { Component } from 'react';
import Signin from './componenets/auth/Signin';
import Signup from './componenets/auth/Signup'
import Details from './componenets/Details'
import './componenets/styling/style.css'
class App extends Component {

 


  state = {
    imath: []
  }
  
  async componentDidMount() {
    try {
      const res = await fetch('http://127.0.0.1:8000/api/imath/'); // fetching the data from api, before the page loaded
      const imath = await res.json();
      this.setState({
        imath
      })
    } catch (err) {
      console.log(err)
    }
  }




  render() {

    return (
      <>

      <nav>
        <h1 class='Name'>IMATH</h1>
        <p class='Name'> [ A ] is  first, Thus easy to reach </p>
      </nav>

         {/* map over all courses in the DB */}
        <div class="all" className='d-flex flex-column p-2 bd-highlight justify-content-between'>  
          {this.state.imath.map(course => (
            <div key={course.id} className='cont list-group-item list-group-item-action' aria-current="true">
               <h3 className='d-flex w-100 justify-content-between'>{course.courseName}</h3>
               <span className='d-flex w-100 justify-content-between'>Course Fees: {course.price} BHD</span>
               
               <h5 hidden >{course.courseProvider}
               {course.location}
               {course.duration}
               </h5>

               <div className='d-flex flex-column w-100 justify-content-between'>
               <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdropD">Details</button>
               </div>
            </div>      
          ))}
        </div>

        {/* ADmin Accces Signup and login */}
        <div class='admin'>
          <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
             Admin Access
          </button>
        </div>
      <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="staticBAdackdropLabel">Admin Access</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
            <div class="modal-body">
              {<Signin/>}
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">Signup</button>
            </div>
           </div>
        </div>
     </div>

        <div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="staticBAdackdropLabel">Admin Access</h5>
                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
               <div class="modal-body">
                {<Signup/>}
               </div>
           </div>
        </div>
        </div>
        <div class="modal fade" id="staticBackdropD" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
         <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                  <h5 class="modal-title" id="staticBAdackdropLabel"> Details </h5>
                 <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
               <div class="modal-body">
                {<Details/>}
                <h4> Detail page </h4>
               </div>
           </div>
        </div>
        </div>
      </>
    )
    
  }
}


export default App;