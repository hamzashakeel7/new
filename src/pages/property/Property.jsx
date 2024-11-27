import React from 'react'
import Propertycomponent from '../../Component/Property component'
import ClientReview from '../../Component/Clientreview'
import { Navbar } from '../../Component/Navbar'
import { Footer } from '../../Component/Footer'

export default function Property() {
  return (
    <div>
      <Navbar/>
 <Propertycomponent/>
 <ClientReview/>
 <Footer/>
    </div>
  )
}
