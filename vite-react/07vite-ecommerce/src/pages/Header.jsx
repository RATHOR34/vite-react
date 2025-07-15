import React,{useEffect,useState} from "react";
import "./Header.css";
 
import { Link } from "react-router-dom";

function Header(){
    const [showsearchInput,setShowsearchInput] = useState(false)
    const[inputValue,setInputValue] = useState("")

    function handleonMouseOver(){
        setShowsearchInput(true)
    }

    function handleonMouseOut(){
        setInputValue("")
        setShowsearchInput(false)
    }

    function handleChange(e){
        console.log(e.target.value)
        setInputValue(e.target.value)
    }


    return(
        <>
          <div className="header">
            <h2 className="logo"><Link to={"/"}>E-commerce</Link></h2>
            <div className="headerRight">
            <div className="formDiv">
                <form action="" onMouseEnter={() => handleonMouseOver()} onMouseLeave={handleonMouseOut}>
                 <input type="text" className={(showsearchInput) ? "showInput" : "closeinput"} placeholder="Search..." onChange={(e) => {handleChange(e)}} value={inputValue}/>
                </form>
            </div>
            <ul className="headerUi">
                <li><Link to="/products" className="text-black">Products</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/signup">Sign-up</Link></li>
            </ul>
          </div>
          </div>
          <div className="min-h-[80px]"></div>
        </>
    )
} 
export default Header;