import NavBar from '../../components/navbar'
import React from 'react'
import { ToastContainer } from 'react-toastify'

const ProfileLayout = ({children}) => {
  return (<>
  {/* added the navbar for userProfile page only */}
    <NavBar/>
    <div>{children}</div>
    </>
  )
}

export default ProfileLayout