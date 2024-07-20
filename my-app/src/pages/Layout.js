import { Outlet, Link } from "react-router-dom";
import chlogo from './chlogo2.png';


const Layout = () => {
    return (
      <>
            
      <header style={{position:"fixed",width:"1500px",marginTop:"0px"}}>
       
        <div style={{backgroundColor:"black",display:"inline-block",marginLeft:"0px",marginRight:"100px"}}><img src={chlogo} className="churchlogo" alt="Church logo"   ></img></div>
        <div id="horiznav"style={{display:"inline-block"}}>
          <ul className="horiznav" style={{backgroundColor:"black"}}>
            
            <li>
              <Link style={{color:"white",textDecoration:"none"}} to="./Homepage">Home</Link>
            </li>
            <li>
              <Link style={{color:"white",textDecoration:"none"}} to="./Aboutus">About Us</Link>
            </li>
            <li>
              <Link style={{color:"white",textDecoration:"none"}} to="./Sermon">Sermon</Link>
            </li>
            <li>
              <Link style={{color:"white",textDecoration:"none"}} to="./Blog">Blog</Link>
            </li>
            <li>
              <Link style={{color:"white",textDecoration:"none"}} to="./Donation">Donation</Link>
            </li>
            <li>
              <button id="contact" style={{borderRadius:"10px", marginLeft:"300px",}}><Link style={{color:"white",textDecoration:"none"}} to="./Contact">Contact Us</Link></button>
            </li>
            
          </ul>
        </div>
        
      </header>
      
      <Outlet />
      </>
    )
  };
  
  export default Layout;