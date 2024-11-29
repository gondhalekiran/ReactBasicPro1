import React from 'react'
import Header from '../Components/Header'
import{HeadLine,Streams,StudentInfo} from '../Utils/data'
import PropsInForm from '../Components/Props/PropsInForm'
const Props = () => {
  return (
    <><Header/>
      <h1>Props</h1>
      {<PropsInForm HeadLine1={HeadLine} Streams1={Streams}  StudentInfo1={StudentInfo}></PropsInForm>}
    </>
  )
}

export default Props
