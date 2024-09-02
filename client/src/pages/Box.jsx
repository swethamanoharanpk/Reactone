import { useState } from "react"
import "./box.css"
function Box(){
    const [btn1,setbtn1] = useState("blue")
    const [btn2,setbtn2] = useState("blue")
    const [btn3,setbtn3] = useState("blue")
    const [btn4,setbtn4] = useState("blue")
    function display1(){
        setbtn1("green")
        setbtn2("red")
        setbtn3("red")
        setbtn4("red")


    }
    function display2(){
        setbtn1("red")
        setbtn2("green")
        setbtn3("red")
        setbtn4("red")

    }
    function display3(){
        setbtn1("red")
        setbtn2("red")
        setbtn3("green")
        setbtn4("red")

    }
    function display4(){
        setbtn1("red")
        setbtn2("red")
        setbtn3("red")
        setbtn4("green")

    }
    
    




    return(
        <div className="mainButton">
        <button className="button" style={{backgroundColor:btn1}} onClick={display1}></button>
        <button className="button" style={{backgroundColor:btn2}} onClick={display2}></button>
        <button className="button" style={{backgroundColor:btn3}} onClick={display3}></button>
        <button className="button" style={{backgroundColor:btn4}} onClick={display4}></button>
        
        </div>

    )
}
export default Box