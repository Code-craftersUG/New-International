import image7 from './image7.png';
import chlogo from './chlogo2.png';
import icon1 from './Icon1.png';
import icon2 from './icon2.png';
import icon3 from './icon3.png';
import image12 from './image12.png';
import image11 from './image11.png';
import image10 from './image10.png';
import shape from './Shape.png';
import romansis from './romansis.png';
import item from './Item.png';
import pastor1 from './pastor1.png'
import rosary from './rosarywoman.png'
import clock from './clockicon.png'
import location from './loc.png'
import night from './night.png'
import cross from './cross.png'
import arrow from './Arrow.png'
import image16 from './image16.png'
import palm from './palm.png'

const Homepage = () => {
    return(
        <>
        
        <div className="imagecontainer" style={{backgroundImage: `url(${image7})`}}>
        
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
            <br></br>
            <br></br>
            <div>
                <p style ={{fontSize:"-50px",fontWeight:"lighter"}}>ABOUT US </p>
                <p style ={{fontSize:"30px",fontWeight:"bold"}}>LOVE AND COMPASSION</p>
                <p style ={{fontSize:"smaller",fontWeight:"lighter",textAlign:"center",marginBottom:"0px"}}>Embracing God's love, we extend compassion to all. Our doors are open to those seeking refuge, comfort, and support. Through </p>
                <p style ={{fontSize:"smaller",fontWeight:"lighter",textAlign:"center",marginTop:"0px"}}>   prayer, counseling, and care, we share the healing power of love, fostering
                   a sense of belonging and hope in our community</p>
                <br></br>
                <br></br>
                <br></br>
                <button style={{borderRadius:"10px",width:"205px",height:"64px",backgroundColor:"#FFD2A4",borderColor:"#FFD2A4"}}>READ MORE</button>

            </div>
            <br></br>
            <br></br>
            <div className="involved" style={{marginLeft:"300px"}}>
               <div className="getinvolved1" style={{width:"200px",height:"300px",borderRadius:"20px",marginRight:"20px"}}>
               <img src={image11} style={{width:"200px",height:"300px"}}className="prayer1" alt="prayer1 "   ></img>
               
               </div>
               <div className="getinvolved" style={{width:"300px",height:"400px",borderRadius:"20px",marginTop:"50px",objectFit:"contain",marginRight:"20px"}}>
               <img src={image12} style={{width:"300px",height:"400px"}}className="prayer2" alt="prayer2 "   ></img>
               </div>
               <div className="getinvolved" style={{width:"200px",height:"300px",borderRadius:"20px"}}>
               <img src={image10} style={{width:"200px",height:"300px"}}className="prayer1" alt="prayer3 "   ></img>
               </div>
            </div>
            <div>
                <p style ={{fontSize:"-50px",fontWeight:"lighter"}}>OUR MISSION &amp; VISION</p>
                <p style ={{fontSize:"30px",fontWeight:"bold"}}>CELEBRATE WITH US</p>
                <p style ={{fontSize:"smaller",fontWeight:"lighter",textAlign:"center",marginBottom:"0px"}}>Join us in joyful worship, special events, and milestones. Let's celebrate God's  </p>
                <p style ={{fontSize:"smaller",fontWeight:"lighter",textAlign:"center",marginTop:"0px"}}>   love and blessings together! </p>
                
                <p style={{textAlign:"center",display:"Inline-block"}}>Read More</p>
                <img src={shape} className="icon" alt="arrow right shape" style={{display:"Inline-block",width:"18px",height:"10px"}}  ></img>

            </div>
            <div style={{backgroundColor:"white", height:"871px",width:"1500px"}}>
                <br></br>
                <br></br>
                <br></br>
            <p style ={{fontSize:"-50px"}}>WATCH AND  LISTEN</p>
            <p style = {{fontSize:"+50px", fontWeight:"bolder",marginBottom:"0px"}}>THE BENEFITS OF</p>
            <p style = {{fontSize:"+50px", fontWeight:"bolder",marginTop:"0px"}}>JOINING OUR CHURCH</p>
            <div className='sermons'>
                <div className='listen' style={{backgroundImage: `url(${romansis})`}}>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p style={{marginBottom:'0px',fontWeight:"bolder",color:"white"}}>WATCH AND LISTEN TO </p>
                    <p style={{marginTop:'0px',fontWeight:"bolder",color:"white"}}>OUR SERMONS </p>

                </div>
                <div className='listen'style={{backgroundImage: `url(${item})`}}>
                <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    {/* <p style={{marginBottom:'0px',fontWeight:"bolder"}}>WATCH AND LISTEN TO </p>
                    <p style={{marginTop:'0px',fontWeight:"bolder"}}>OUR SERMONS </p> */}
                </div>
                <div className='listen' style={{backgroundImage: `url(${pastor1})`}}>
                <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p style={{marginBottom:'0px',fontWeight:"bolder",color:'white'}}>WATCH AND LISTEN TO </p>
                    <p style={{marginTop:'0px',fontWeight:"bolder",color:'white'}}>OUR SERMONS </p>
                </div>
                <div className='listen' style={{backgroundImage: `url(${rosary})`}}>
                <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <br></br>
                    <p style={{marginBottom:'0px',fontWeight:"bolder",color:'white'}}>WATCH AND LISTEN TO </p>
                    <p style={{marginTop:'0px',fontWeight:"bolder",color:'white'}}>OUR SERMONS </p>
                </div>
                

            </div>
            

            </div>

            <p style ={{fontSize:"-50px",marginTop:"100px"}}>UPCOMING SERMONS</p>
            <p style = {{fontSize:"+50px", fontWeight:"bolder",marginBottom:"0px"}}>JOIN US AND BECOME PART</p>
            <p style = {{fontSize:"+50px", fontWeight:"bolder",marginTop:"0px"}}>OF SOMETHING GREAT</p>
            <br></br>
            <br></br>
            <div className="upcome" style={{marginLeft:"100px"}}>
                <div className="stream" style={{width:"435px",height:"512px",backgroundColor:"rgba(255, 245, 235, 1)"}}>
                    <div id="datebox" style={{width:"32px",height:"47px",marginBottom:"0px"}}>
                        <p style={{fontWeight:"bolder", fontSize:"+10px"}}> 20</p>
                        <p style={{ fontSize:"+10px"}}> July</p>

                    </div>
                    <div style ={{marginTop:"0px",textAlign:"left", marginLeft:"100px"}}>
                    <p style ={{fontSize:"-50px",marginTop:"0px",textAlign:"left", color:"hsba(27, 100%, 99%, 1)"}}>
                        UPCOMING EVENT
                    </p>
                    <p style = {{fontSize:"+20px", fontWeight:"bolder",marginBottom:"0px"}}>WATCH AND LISTEN TO  </p>
                    <p style = {{fontSize:"+20px", fontWeight:"bolder",marginTop:"0px"}}>OUR SERMONS</p>
                    
                    <p style={{marginBottom:"0px", fontSize:"10px"}}>Strengthen your faith in the lord and He </p>
                    <p style={{marginTop:"0px",fontSize:"10px"}}>will never let you down</p>

                    <img src={clock} className="icon" alt="Clock logo" style={{display:"inline-block"}}  ></img>
                    <p style={{display:"inline-block",fontSize:"10px",marginBottom:"0px"}} >Friday 23:39 PM</p>
                    <p style={{fontSize:"10px", marginLeft:"18px",marginTop:"0px",marginBottom:"0px"}}>Saturday 21:20 PM</p>
                    <img src={location} className="icon" alt="location logo"   ></img>
                    <p style={{display:"inline-block",fontSize:"10px",marginBottom:"0px"}} >ACCRA,GHANA</p>
                    <button style={{width:"215px",height:"64px",display:"block", backgroundColor:"rgba(22, 23, 34, 1)", color:"rgba(255, 210, 164, 1)",borderRadius:"6px"}}>STREAM LIVE</button>
                    



                    

                    </div>
                    

                </div>
                <div style={{width:"612px",height:"512px"}}>
                <img src={night}  alt="prayer night"   ></img>

                </div>
                <div style={{width:"234px",height:"512px", backgroundColor:"white"}}>
                <img src={cross}  alt="cross"   ></img>


                </div>

            </div>
            <p style={{display:"inline-block", textAlign:"right"}}>View all sermons</p>
            <img src={arrow} alt="arrow"  style={{display:"inline-block"}}></img>
            <br></br>
            <div style={{width:"1500px",height:"736px",backgroundImage: `url(${image16})`,backgroundColor:"white"}}>
                <br></br>
                <br></br>
                <div style={{width:"768px",height:"480px",backgroundColor:"white",marginLeft:"300px",marginTop:"100px",display:"flex"}}>
                    <div style={{width:"50%",height:"480px"}}>
                        <br></br>
                        <br></br>
                        <h1 style={{marginBottom:"0px",marginLeft:"50px",textAlign:"left"}}> FUEL THE VISION, </h1>
                        <h1 style={{marginTop:"0px",marginLeft:"50px",marginBottom:"0px",textAlign:"left"}}>SUPPORT OUR </h1>
                        <h1 style={{marginTop:"0px",marginLeft:"50px",textAlign:"left"}}>MISSION.</h1>
                        <p style={{marginBottom:"0px",marginLeft:"50px",textAlign:"left"}}>"Supporting the work of the ministry"</p>
                        <p style={{textAlign:"left",marginTop:"0px",marginLeft:"50px"}}>(2 Corithians 11:8-9)</p>
                        <br></br>
                        <br></br>
                        <button style={{width:"182px",height:"64px",backgroundColor:"rgba(255, 210, 164, 1)",borderRadius:"5px",borderColor:"rgba(255, 210, 164, 1)"}}>Donate</button>

                    </div>
                    <div style={{width:"50%",height:"480px"}}>
                      <img src={palm} alt="logo of palm"  style={{marginTop:"150px"}}></img>

                    </div>

                </div>

            </div>



        </div>
        </>
        
    
        )
}

export default Homepage;