
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './components/ui/theme-provider.jsx'
import './App.css'
import AppLayout from './Layout/App-layout.jsx'
import JobPage from './pages/job-page.jsx'
import Postjob from './pages/Postjob.jsx'
import JobListing from './pages/JobListing'
import LandingPage from './pages/landing.jsx'
import ProtectedRoutes from './components/ProtectedRoutes.jsx'
import Onboarding from './pages/Onboarding'
import Job from './pages/Job'
import MyJobs from './pages/MyJobs.jsx'
import SaveJobs from './pages/SaveJobs.jsx'
const router = createBrowserRouter([{
  element:<AppLayout/>,
  children:[{
    
      path:'/',
      element:<LandingPage/>},
 
      
      {
        path:'/onboarding'
        ,element:
          <ProtectedRoutes>
        <Onboarding/>

          </ProtectedRoutes>
      },
{
      path:'/JobPage',
      element:
        <ProtectedRoutes>
      <JobPage/>
      </ProtectedRoutes>

    
  },
  {
    path:'/post-job',
    element:
      <ProtectedRoutes>
        <Postjob/>
      </ProtectedRoutes>
    
  },
  {
    path:'/saved-job',
    element:
    <ProtectedRoutes> <SaveJobs/></ProtectedRoutes>

   
  },
{
      path:'/my-Job',
      element:
        <ProtectedRoutes>
      <MyJobs/>

        </ProtectedRoutes>

    
  },
  {
    path:'/Job-Listing',
    element:
      <ProtectedRoutes>
    <JobListing/></ProtectedRoutes>

  
},
  {
    path:'/job',
    element:
      <ProtectedRoutes>
    <JobListing/></ProtectedRoutes>

  
},]
}])

function App() {
 

  return (
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     <RouterProvider router={router} />
  </ThemeProvider>
   
  
  )
}

export default App
