import { Outlet, Link } from "react-router-dom";
import schlogo from './schlogo.png';


const Layout = () => {
    return (
      <>
            
      <header style={{position:"fixed",width:"100%"}}>
       
        <div style={{backgroundColor:"black",display:"inline-block",marginLeft:"0px",marginRight:"100px"}}><img src={schlogo} className="deptlogo" alt="Ug DCS logo"   ></img></div>
        <div id="horiznav"style={{display:"inline-block"}}>
          <ul className="horiznav" style={{backgroundColor:"black"}}>
            
            <li>
              <Link style={{color:"#BD9C6C",textDecoration:"none"}} to="./Homepage">Homepage</Link>
            </li>
            <li>
              <Link style={{color:"#BD9C6C",textDecoration:"none"}} to="./Aboutus">About Us</Link>
            </li>
            <li>
              <Link style={{color:"#BD9C6C",textDecoration:"none"}} to="./Sermon">Sermon</Link>
            </li>
            <li>
              <Link style={{color:"#BD9C6C",textDecoration:"none"}} to="./Blog">Blog</Link>
            </li>
            <li>
              <Link style={{color:"#BD9C6C",textDecoration:"none"}} to="./Donation">Donation</Link>
            </li>
            <li>
              <Link style={{color:"#BD9C6C",textDecoration:"none"}} to="./Contact">Contact Us</Link>
            </li>
            
          </ul>
        </div>
        
      </header>
      
      <Outlet />
      </>
    )
  };
  
  export default Layout;