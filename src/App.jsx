import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import AboutPage from './Pages/AboutPage'
import SkillPage from './Pages/SkillPage'
import ProjectPage from './Pages/ProjectPage'
import ContactPage from './Pages/ContactPage'
import Navbar from './Components/Navbar'
import AllProjects from './Components/AllProjects'

function App() {

  return (
    <>
    <Navbar></Navbar>
    <Routes>
      <Route path='/' element={<HomePage></HomePage>} />
      <Route path='/about' element={<AboutPage></AboutPage>} />
      <Route path='skills' element={<SkillPage></SkillPage>} />
      <Route path='/projects' element={<ProjectPage></ProjectPage>} />
      <Route path='/contact-us' element={<ContactPage></ContactPage>} />
      <Route path='/skills/all-projects' element={<AllProjects></AllProjects>} />
    </Routes>
    </>
  )
}

export default App
