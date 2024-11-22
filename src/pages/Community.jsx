import React from 'react'
import { Navbar } from '../Component/Navbar'
import Communitysearch from '../Component/Community/Communitysearch'
import Communityform from '../Component/Community/Communityform'
import { Footer } from '../Component/Footer'

function Community() {
  return (
    <div>
        <div>
            <Navbar/>
            <Communitysearch/>
            <Communityform/>
            <Footer/>
        </div>
      
    </div>
  )
}

export default Community
