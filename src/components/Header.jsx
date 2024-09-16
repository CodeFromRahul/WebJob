import React, { useEffect, useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { SignedIn,SignInButton,SignedOut,UserButton, SignIn, useUser } from '@clerk/clerk-react'
import { Button } from './ui/button'
import { BriefcaseBusinessIcon, Heart, PenBox } from 'lucide-react'



const Header = () => {
  const [showSignIn,setSignIn ]=useState(false)
  const [Search,setSearch]=useSearchParams();
  const {user }= useUser()
 
  useEffect(()=>{
    if(Search.get("sign-in")){
      setSignIn(true)

    }
  },[Search])
  
  const handleOverlayCLick=(e)=>{
    if(e.target===e.currentTarget){
      setSignIn(false)
      setSearch({})
    }
  }
  return (
    <div >
    <nav className='m-15 py-4 px-6 flex justify-between items-center'>
        <Link >
        <img src='/logo.png' className='h-20 '/>
        </Link>

    {/* <Button variant="outline">Login</Button> */}

<div className='flex gap-8'>

    <SignedOut>
    {/* add àcondition here  */}
  <Button variant="outline" onClick={()=>setSignIn(true)} > Login</Button>
      </SignedOut>
      
      <SignedIn>
     { user?.unsafeMetadata?.role==="recruiter" &&(
       <Link to="/post-job"><Button variant="destructive" className="rounded-full" >
      <PenBox size={17} className='mr-2'/>
        Post a Job
      </Button>
       </Link>)}

        <UserButton appearance={
          {
            elements:{
              avatarBox:"w-10 h-10"
            }
          }
        }>
          <UserButton.MenuItems>
            <UserButton.Link 
              label='My Jobs'
              labelIcon={<BriefcaseBusinessIcon size={15}/>}
              href="/my-Job"
              
            />
          </UserButton.MenuItems>
          <UserButton.MenuItems>
            <UserButton.Link 
              label='Saved Job'
              labelIcon={<Heart size={15}/>}
              href="/saved-job"
              
            />
          </UserButton.MenuItems>
        </UserButton>
      </SignedIn>
      </div>

    </nav>
    {showSignIn && 
    <div className='flex fixed inset-0 items-center justify-center bg-black bg-opacity-50'
    onClick={handleOverlayCLick}>
      <SignIn
   signUpForceRedirectUrl='/onboarding'
  fallbackRedirectUrl='/onboarding'
      />
    </div> }
    </div>
  )
}

export default Header