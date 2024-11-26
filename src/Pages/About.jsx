import React from 'react'
import VariableAsProps from '../Components/VariableAsProps'
import Header from '../Components/Header';
const About = () => {
  const cars=["TATA"];
  return (
    <div>
      <Header></Header>
      <VariableAsProps brand={cars[0]}/>
    </div>
  )
}

export default About
