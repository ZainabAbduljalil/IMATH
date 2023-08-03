import React from 'react'
import axios from 'axios'
import Signin from './Signin'
import Signup from './Signup'


export default function AuthHome() {
  return (
    <div>
        <Signin/>
        <Signup/>
    </div>
  )
}
