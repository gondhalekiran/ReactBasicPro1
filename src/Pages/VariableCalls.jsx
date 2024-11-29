import React from 'react'

import Header from '../Components/Header';


import VarCallFromSameFile from '../Components/VariableCalls/VarCallFromSameFile';
import VarCallFromDiffFile from '../Components/VariableCalls/VarCallFromDiffFile';
const VariableCalls = () => {
  
  return (
    <div>
      <Header></Header>
     
     <VarCallFromSameFile/>
     <VarCallFromDiffFile/>
    </div>
  )
}

export default VariableCalls
