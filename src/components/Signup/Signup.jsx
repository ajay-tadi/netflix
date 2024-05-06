import React from 'react'
import Registration from './Registration/Registration'
import SignupNavbar from '../Navbar/SignupNavbar'
import RegistrationContactCard from './Registration/RegistrationContactCard'

function Signup() {
  return (
    <>
        <SignupNavbar btnProp={false} />
        <Registration />
        <RegistrationContactCard />
    </>
  )
}

export default Signup