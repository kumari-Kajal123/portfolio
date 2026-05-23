import React from 'react'
import First from '../Components/First'
import AboutPage from './AboutPage'
import ContactPage from './ContactPage'
import ProjectPage from './ProjectPage'
import SkillPage from './SkillPage'

export default function HomePage() {
  return (<>
  <First></First>
  <AboutPage></AboutPage>
  <SkillPage></SkillPage>
  <ProjectPage></ProjectPage>

  <ContactPage></ContactPage>
  
  </>
  )
}
