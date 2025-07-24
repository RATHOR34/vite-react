import { Link } from "react-router-dom";

function Header(){
  return(
    <div>
        <h2>shopify</h2>
        <nav>
            <ul>
                <li><Link to="/first">first</Link></li>
                <li><Link to="./second">second</Link></li>
            </ul>
        </nav>
    </div>
  )
}
export default Header