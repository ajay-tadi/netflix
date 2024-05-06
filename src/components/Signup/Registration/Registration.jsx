import React from 'react'
// import SignupNavbar from '../../Navbar/SignupNavbar'
// import RegistrationContactCard from './RegistrationContactCard'
import Register from './Register';
import {  Route, Routes,  } from "react-router-dom";
import RegForm from './RegForm';
import SignUpRegister from './SignUpRegister';
import PlanForm from './PlanForm';
import PaymentPicker from './PaymentPicker';


function Registration() {
  return (
    <>
    <Routes >
        <Route exact path='/signup/registration' element={<Register />}/>
        <Route path='/signup/planform' element={<PlanForm />} />
        <Route path='/signup/regform' element={<RegForm />} />
        <Route path='/signup' element={<SignUpRegister />} />
        <Route path='/signup/paymentPicker' element={<PaymentPicker />} />
        <Route path='*' element={<div className='w-screen h-screen text-center flex justify-center align-center'><h1>Error 404</h1></div>} />
      </Routes>
    </>
  )
}

export default Registration