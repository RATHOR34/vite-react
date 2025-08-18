import React, { useEffect, useState,useContext } from "react";
import "./Header.css";
import { Link } from "react-router-dom"; 
import { ProfileContext } from "../App";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from "react-redux";

function Header() { 
  
  const [showsearchInput, setShowsearchInput] = useState(false)
  const [inputValue, setInputValue] = useState("") 
  const {cartItems} = useSelector(state => state.cart)

  function handlonMouseOver(){ 
      setShowsearchInput(true)
  }

  function handlonMouseOut(){
    setInputValue("")
    setShowsearchInput(false)
  }


  function handleChange(e){
         console.log(e.target.value)
         setInputValue(e.target.value)
  }



 


  return (
    <> 
    <div className="header">
      <h2 className="logo"><Link to={"/"}>E-commerce</Link></h2>
      <div className="headerRight"  >
      <div className="formDiv"> 
        <form onMouseEnter={() => handlonMouseOver()} onMouseLeave={handlonMouseOut} >

          <input type="text" className={(showsearchInput) ? "showInput" : "closeInput" } placeholder="Search..."
           onChange={(e) => {handleChange(e)}} value={inputValue}/>
          {/* <span> <SearchIcon className="search"/></span> */}
        </form>
        </div>
        <ul className="headerUl">
             <li> <Link to="/products">Products</Link> </li>
             <li> <Link to="/about">About</Link> </li>
             
             <li><Link to="/profile">Profile</Link></li> 
             <li> <Link to="/signup">Sign-up</Link> </li>
             <li style={{position:"relative"}}> <Link to="/cart"> <ShoppingCartIcon sx={{fontSize: 30}} /><span style={{position:"absolute",right:"12px", top:"-5px" ,backgroundColor:"red" ,color:"white",width:"25px",height:"25px" ,borderRadius:"50%",padding:"3px 6px 0",border:"2px solid white"}}>{cartItems.length}</span></Link> </li>
             
        </ul>
      </div>
    </div>
    <div className="min-h-[80px]"></div>
    </>
  );
}

export default Header;



//  import { Link } from 'react-router-dom'

 
// function Header() {
//   return (
//     <div className='container'> 
//         <div className='section' style={{display: "flex", justifyContent: "space-between", alignItems: "center", backgroundColor: "grey",}}>
//           <h2>meesho</h2>
          
//           <form>
//             <input type='text' />
//             <button>search</button>
//           </form>
 
//           <nav>
//             <ul className='text-white'>
//                 <li> <Link to="/products" className='text-black'>Products</Link> </li>
//                 <li> <Link to="/sign-up">Sign-up</Link> </li>
//                 <li> <Link to="/about">about</Link> </li>
//             </ul>
//           </nav>
//         </div>
        
//     </div>
//   )
// }

// export default Header