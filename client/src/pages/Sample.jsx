import { useState } from "react"
import "./sample.css"
function Sample(){
    const [state,setState] = useState(0)
    const [change,setChange] = useState("blue")

    function display1(){
        setState(state + 1)
        setChange("green")
    }
    function display2(){
        setState(state>0 ? state - 1 : 0)
        setChange("red")
    }
    function display3(){
        setState(0)
        setChange("brown")

    }
    


    return(
        <div>
        <h1 style={{color:change}}>{state}</h1>
        <button onClick={display1}>Increment</button>
        <button onClick={display2}>Decrement</button>
        <button onClick={display3}>Reset</button>
        </div>
        
    )

}
export default Sample