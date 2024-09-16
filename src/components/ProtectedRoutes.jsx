import { useUser } from '@clerk/clerk-react'
import path from 'path'
import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const ProtectedRoutes = ({children}) => {
    const {isSignedIn,user,isLoaded}=useUser()
    const {pathname} = useLocation()

    if(isLoaded && !isSignedIn &&isSignedIn!==undefined){
        return <Navigate to="/?sign-in=true"/>
    }

    // Checking onBoarding Status

    if(user!==undefined && !user.unsafeMetadata.role && !path=="/onboarding")
      return <Navigate to="/onboarding" />
    

  return children
}

export default ProtectedRoutes