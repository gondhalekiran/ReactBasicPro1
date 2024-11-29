import React, { useState } from 'react'
import Header from '../Components/Header'
import {PropsObject,DestruredPropsObject} from '../Components/Props/PropsComponentAsVar';
const MultipleComponentFromSameFile = () => {
  const [darkmode, setDarkmode] = useState (false);
  const cars = ["TATA"];
  return (
    <>
    <Header/>
     <button className={ darkmode? "Dark": "Light"} onClick={() => setDarkmode(!darkmoode)}> {darkmode ? "Dark" : "Light"}</button>
     <h1>Multiple Component From Same File</h1>
     <PropsObject brand={cars[0]}></PropsObject>
     <DestruredPropsObject brand={cars[0]}></DestruredPropsObject>
    </>
  )
}

export default MultipleComponentFromSameFile
