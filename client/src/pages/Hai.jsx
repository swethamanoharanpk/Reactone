import {styled} from 'styled-components'
import React from 'react'
import Hello from './Hello'
const Box = styled.div`
width : 500px;
height : 500px;
background-color : red` 

function Hai() {
    var a = "swetha"
  return (
    <div>
    <Hello data= {a}/>
    <Box></Box>

    </div>
  )
}

export default Hai