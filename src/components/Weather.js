import React from "react";

const Weather = props => (
   <div className='weather__info'>
    {
        props.city && props.country && <p className="weather__key" >Location {props.city} ,  {props.country} </p>
 }
  {
      props.temperature && <p className="weather__key">Current Temperature:  
      <span className="weather__value">{props.temperature}</span>
      </p>  
    }
  {
    props.humidity &&  <p className="weather__key">Current Humidity:    
    <span className="weather__value">{props.humidity}</span>
    </p> 
    }
  {
      props.description && <p className="weather__key">Current Condition:    
      <span className="weather__value">{props.description}</span>
      </p> 
      }
  {
      props.wind &&  <p className="weather__key">Current Wind Speed:   
           <span className="weather__value">{props.wind}</span>
           </p>
       }
  {
      props.error &&  <p className="weather__key">
           {props.error}
           </p> 
      }
    
    </div>
   )


export default Weather;