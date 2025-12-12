import React from 'react'
import Navbar from './Navbar'
import Intro from './Intro'
import Skills from './Skil'
import Project from './Project'
import Resume from './Resume'
import Contact from './Contact'
function App() {
  return (
    <>
      <div><Navbar /></div>
      <div><Intro /></div>
      <div><Skills/></div>
      <div><Project/></div>
      <div><Resume/></div>
      <div><Contact/></div>
    </>

  )
}

export default App