
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ThemeProvider } from './components/ui/theme-provider.jsx'
import './App.css'
import AppLayout from './Layout/App-layout.jsx'
import JobPage from './pages/job-page.jsx'
import JobListing from './pages/JobListing'
import LandingPage from './pages/landing.jsx'
import Onboarding from './pages/Onboarding'
import Job from './pages/Job'
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
      path:'/Job/:id',
      element:<Job/>

    
  },
  {
    path:'/Job-Listing',
    element:<JobListing/>

  
}]
}])

function App() {
 

  return (
     <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
     <RouterProvider router={router} />
  </ThemeProvider>
   
  
  )
}

export default App
