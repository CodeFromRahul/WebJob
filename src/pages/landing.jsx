import React from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Carousel ,CarouselContent, CarouselItem} from '@/components/ui/carousel'
import componies from  "../data/componies.json"
import faq from  "../data/faq.json"
import {
  Card,
  CardContent,

 
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

import Autoplay from 'embla-carousel-autoplay'
const LandingPage = () => {
  return (
    
   
    <main className='flex flex-col m-20 gap-10 sm:gap-20 py-10 sm:py-20 lg:gap-30' >
    <section className='text-center'>
      <h1 className='flex flex-col items-center justify-center gradient-title text-8xl font-extrabold sm:text-4xl lg:text-6xl '>
      Find Your Dream Job {" "} <span className='flex items-center gap-2 sm:gap-6'>And Get {""}<img className='h-14 sm:h-14 lg:h-32' src='/logo.png'/> </span></h1>
      <p className='text-gray-500 sm:mt-4 text-xs sm:text-xl'>
        Explore thousands of job listings or find the perfect candidate 
      </p>

      </section> 
      <div className='flex gap-6 justify-center pt-20 '>
        <Link to="/job">
        <Button variant="blue" size="xl"> Job </Button>
        </Link>
        <Link to="/post-job">
        <Button variant='destructive' size='xl'> Post Job </Button>
        </Link>
      </div>
      <Carousel  plugins={[Autoplay({delay:1900})]}
      opts={{
        align: "start",
      }}
      className="w-full py-10"
    >
      <CarouselContent className="flex gap-5 sm:gap-20 items-center">
        {componies.map(({name,id,path})=>{
            return (
              <CarouselItem className="basis-1/6 lg:basis=1/6" key={id}>
                <img className='h-9 sm:h-14 object-contain ' src={path} alt={name}/>
              </CarouselItem>
            )
        })
          
        }
      </CarouselContent>
    
    </Carousel>

<div className='min-w-96 flex  m-20 h-90 justify-center items-center '>
      <img src='/banner.jpeg' className='w-full  '/>
</div>
<section className='grid grid-cols-1 md:grid-cols-2 m-5 gap-4'>
  {/* {card} */}
  <Card>
  <CardHeader>
    <CardTitle>For Job Seekers</CardTitle>
  </CardHeader>
  <CardContent>
 Search and apply for jobs ,track applications and more .
  </CardContent>
 
</Card>
  <Card>
  <CardHeader>
    <CardTitle>For Employers</CardTitle>
  </CardHeader>
  <CardContent>
    <p>post jobs, manage application ,and find the best candiates</p>
  </CardContent>
 
</Card>

</section>
<Accordion type="single" collapsible>
{faq.map((faq,index)=>{
  return(
  <AccordionItem  key={index} value={`item-${index+1}`}>
    <AccordionTrigger>{faq.question}</AccordionTrigger>
    <AccordionContent>
      {faq.answer}
    </AccordionContent>
  </AccordionItem>)
})}
 
</Accordion>


    </main>
   
  )
}

export default LandingPage