import React from "react";


 class Weather extends React.Component {
  render() {
    return (
      <div>
      {this.props.city && this.props.country && <p>In the City: {this.props.city} & 
    Country: {this.props.country} </p> }
    {this.props.temperature && <p>Current Temperature: {this.props.temperature}</p>  }
    {this.props.humidity &&  <p>Current Humidity: {this.props.humidity}</p> }
    {this.props.description && <p>Current Condition: {this.props.description}</p> }
    {this.props.wind &&  <p>Current Wind Speed: {this.props.wind}</p> }
    {this.props.error &&  <p> {this.props.error}</p> }
      
      </div>
    )
  }
}
export default Weather;