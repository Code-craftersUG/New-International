import image7 from './image7.png'
import chlogo from './chlogo2.png';

const Homepage = () => {
    return(
        
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
    
        )
}

export default Homepage;