import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './hovoco.css';
// import xircularone from '../Assets/Circular logo.png'
// import arrow from '../Assets/icons8-right-arrow-50.png'
// import Arrowtwo from '../Assets/Arrow.svg'
// import Up from '../Assets/Uparrow.svg'
// import { ReactComponent as MySvgIcon } from '../Assets/Uparrow.svg';
import close from '../Assets/close.png';
import closetwo from '../../src/Assets/closetwo.png'
import vector from '../../src/Assets/Vecto1.png'

function Hivovocontent() {
  const [pricingData, setPricingData] = useState({});
  const[pricingDatatwo,setPricingDatatwo]=useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupContent, setPopupContent] = useState('');
  const [popupTitle, setPopupTitle] = useState('');

  const baseUrl = 'https://ayatana.xircular.io';

  useEffect(() => {
    axios
      .get(`${baseUrl}/api/website-services/3?[populate][media][fields]=url&populate[website_cards][populate][media_list][fields]=url&[populate][media_list][fields]=alternativeText&populate[website_cards][populate][media_list][fields]=alternativeText`)
      .then((response) => {
        console.log("API Response:", response.data);
        // console.log("color",)
        setPricingData(response.data.data);
        setPricingDatatwo(response.data.attributes.title)
      })
      .catch((error) => {
        console.error("Error fetching API data:", error);
      });
  }, []);

  const handleCardClick = (url) => {

    if (url) {
      window.open(url, '_blank');
    }
  };
  const popupedit = (content,title) => {
    setPopupContent(content);
    setPopupTitle(title);
    setShowPopup(true);
  }
  
  return (
    <>
 
    <div>
     
      {pricingData && pricingData.attributes && (
        <div>
         <div className='navbar-section'>
          <div className='parent-navbar-section'>
     <div className='navbar-image'>
  
      <img  src={`${baseUrl}${ pricingData.attributes.media?.data?.[0]?.attributes?.url}`} alt="hivocologo" className='navbar-image-two'/>
      </div>
     {/* <div className='subtitle-section'>{pricingData.attributes.subtitle}</div> */}
     </div>
   
      {/* <div>{pricingDatatwo}</div> */}

      {/* <img src={imageUrltwo} style={{width:"50px",height:"50px",objectFit:"cover"}} /> */}
    
      </div>
          {/* <div style={{ textAlign: "center" }}>
            <h2 style={{ color: 'Black',textTransform: 'uppercase',paddingTop:"110px" }}>{pricingData.attributes.title}</h2>
          
          </div> */}
          <div className='pricing-full-page-container' >
            <div className='pricing-flexbox-container'>
              {pricingData.attributes.website_cards.data.map((item, index) => {
                                const imageUrlone = baseUrl + (item.attributes.media_list?.data?.[0]?.attributes?.url || '');
                                const medialistTwoData = item.attributes.medialisttwo?.data || [];
                                console.log("image")
                return (
                  <div key={index} className='pricing-item-section' style={{ backgroundColor:  item.attributes.colour_code   ,borderColor: item.attributes.colour_code ,position:"relative"}} >
                    <div style={{width:"60px",height:"60px"}}>
                     <img src={imageUrlone} className='logo-xircular' style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                     </div>
                    <div style={{ paddingTop: "30px", paddingBottom: "10px",letterSpacing:"0.5px" }} className='items-title-div'><b>{item.attributes.title}</b></div>
                       <div style={{paddingTop:"10px", className:"item-dec-div"}} className='items-title-description'> {item.attributes.description}</div> 
                       <div style={{paddingTop:"20px"}} className='how-it-works-section'onClick={() => popupedit(item.attributes.howitworkscontent,item.attributes.howitworkscontenttwo)}><span  className='how-it-works-section-two'></span>{item.attributes.howitworkstitle}</div>
                      
                       
                       {/* <div style={{backgroundColor:item.attributes.explorebackgroundcolorcode ,color: item.attributes.Exploretextcolorcode,textAlign:"right",position:"absolute",bottom:"0px",right:"0px",width:"100%",paddingTop:"20px",paddingBottom:"20px",paddingRight:"10px"}} className='attribute-section-backgrround'  onClick={() => handleCardClick(item.attributes.url)}>{item.attributes.explorebutton}   */}
                       {/* {medialistTwoData.length > 0 && ( */}
          {/* // medialistTwoData.map((media, subIndex) => ( */}
            {/* <span style={{width:"20px",color:"white"}} > <Arrowtwo /></span> */}

          {/* )) */}
        {/* )} */}
        
        {/* <span style={{width:"300px",height:"20px",border:"1px solid blue",padding:"20px"}}>-></span> */}
        {/* <span><MySvgIcon  color={ item.attributes.Exploretextcolorcode}  /></span> */}
      {/* </div> */}
                    {/* <div style={{position:"absolute",marginTop:"30px",
                          position: "absolute",
                   marginTop: "30px",
                     top: "100%",
                     left: "50%",
                   transform: "translate(-50%, -50%)",
                     textTransform: "uppercase",
                     width: "100%",
  // Prevent text from wrapping
                  overflow: "hidden", // Hide overflowing content
  //  textOverflow: "ellipsis",
                 textAlign:"center" }} > {item.attributes.subtitle}</div> */}
                
                    {/* style={{position:"absolute",marginTop:"30px",marginLeft:"80px" ,textTransform: 'uppercase'}} */}
                  </div>
                  
                );
              })}



{showPopup && (
              <>
               <div className="backdrop-blur" onClick={() => setShowPopup(false)}   />
        <div className="popup-container" >
          {/* Popup content */}
          <div className="popup-content" style={{display:"flex",flexDirection:"column",}} >
            <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
              
            <div ></div>
            <div className="close-button" onClick={() => setShowPopup(false)}>
           <img src={ closetwo} height="40" width="40" style={{paddingTop:"10px",paddingRight:"10px"}} alt="close-icon" className='close-section-popup'/>
            </div>
            </div>
            <div className='popup-content-text'>{popupContent}</div>
            <div className='popup-title'>{popupTitle}</div>
          </div>
        </div>
        
  
        </>
      )}
              
            </div>

            {/* start of popupcode */}

          
            {/* end of popupcode */}
            
          </div>
          
        </div>
      )}
    </div>
    </>
  );
}

export default Hivovocontent;







