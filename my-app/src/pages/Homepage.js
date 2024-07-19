import image7 from './image7.png';
import chlogo from './chlogo2.png';
import icon1 from './Icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';

const Homepage = () => {
    return(
        <>
        
        <div className="imagecontainer" style={{backgroundImage:{image7}}}>
            <div className="welcome1">
                <h6 style={{color:'white',marginBottom:"20px",textAlign:'left'}}>WELCOME TO OUR CHURCH</h6>
                <h2 style={{color:'white',fontSize:+40,textAlign:'left'}}>BECOME A PART OF OUR COMMUNITY</h2>
                <br></br>
                <br></br>
                <button style={{borderRadius:"10px",width:"200px",height:"75px",backgroundColor:"#FFD2A4",borderColor:"#FFD2A4"}}>LEARN MORE</button>
                <br></br>
                <p style={{color:"white", textAlign:'left',marginBottom:"0px"}}>NEW INTERNATIONAL CHURCH</p>
                <p style={{color:"white",textAlign:'left'}}>GHANA</p>


            </div>
            <div className="welcome2">
                <img src={chlogo} className="churchlogo" alt="Church logo" style={{width:"423px", height:"188px"}}  ></img>
                <br></br>
                <br></br>

            </div>

        </div>
        <div className="relevance">
            <br></br>
            <br></br>
            <div>
                <p style ={{fontSize:"-50px",fontWeight:"lighter"}}>NIC</p>
                <p style ={{fontSize:"30px",fontWeight:"bold"}}>A CHURCH THAT'S RELEVANT</p>
            </div>
            <div className="involved">
                <div className="getinvolved1">
                    <div className="iconbox" >
                        <img src={icon1} className="icon" alt="icon of description"   ></img>

                    </div>
                    <div className='description'>
                        <h3>ABOUT US</h3>
                        <p>Welcome to New International Church,a vibrant community of faith in Accra,Ghana.We are dedicated to spreading God's love and serving our community.
                            Join us on this journey of faith. hope and love.
                        </p>
                    </div>
                    <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div style={{backgroundColor:"#FFD2A4", width:'411px',height:'16px'}} >

                </div>

                </div>
                <div className="getinvolved">
                <div className="iconbox" >
                        <img src={icon2} className="icon" alt="icon of description"   ></img>

                    </div>
                    <div className='description'>
                        <h3>GET INVOLVED</h3>
                        <p>Join our community in serving others! Volunteer,participate in outreach programs, and engage in small groups to deepen your connection with God
                            and our church family.
                        </p>
                    </div>
                    <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div style={{backgroundColor:"#FFD2A4", width:'411px',height:'16px'}} >

                </div>
                </div>
                <div className="getinvolved">
                <div className="iconbox" >
                        <img src={icon3} className="icon" alt="icon of description"   ></img>

                </div>
                <div className='description'>
                        <h3>GIVING BACK</h3>
                        <p>Sharing God's love through service and generosity. Support our outreach programs, missions, and community initiatives, making 
                            a tangible difference in the lives of others.</p>
                </div>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
                <div style={{backgroundColor:"#FFD2A4", width:'411px',height:'16px'}} >

                </div>
                    
                </div>
            </div>


        </div>
        </>
        
    
        )
}

export default Homepage;