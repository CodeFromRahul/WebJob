
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import AppLayout from './Layout/App-layout.jsx'
import JobPage from './pages/job-page.jsx'
import LandingPage from './pages/landing.jsx'
import Onboarding from './pages/Onboarding'
const router = createBrowserRouter([{
  element:<AppLayout/>,
  children:[{
    
      path:'/',
      element:<LandingPage/>},
 
      
      {
        path:'/onboarding'
        ,element:<Onboarding/>
      },
{
      path:'/JobPage',
      element:<JobPage/>

    
  },
  {
    path:'/Job-Listing',
    element:<JobListing/>

  
}]
}])

function App() {
 

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
