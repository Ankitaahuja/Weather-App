import React from "react";

const Weather = props => (
   <div>
    {props.city && props.country && <p>In the City: {props.city} & 
  Country: {props.country} </p> }
  {props.temperature && <p>Current Temperature: {props.temperature}</p>  }
  {props.humidity &&  <p>Current Humidity: {props.humidity}</p> }
  {props.description && <p>Current Condition: {props.description}</p> }
  {props.wind &&  <p>Current Wind Speed: {props.wind}</p> }
  {props.error &&  <p> {props.error}</p> }
    
    </div>
   )


export default Weather;