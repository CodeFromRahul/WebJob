import React from 'react'
import { Link } from 'react-router-dom'
// import { Button } from './ui/button'
import { SignedIn,SignInButton,SignedOut,UserButton } from '@clerk/clerk-react'

const Header = () => {
  return (
    <div >
    <nav className='m-15 py-4 px-6 flex justify-between items-center'>
        <Link >
        <img src='/logo.png' className='h-20 '/>
        </Link>

    {/* <Button variant="outline">Login</Button> */}

    <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </nav>
    </div>
  )
}

export default Header