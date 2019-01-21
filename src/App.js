import React from "react";


import Titles from './components/Titles'
import Forms from './components/Forms'
import Weather from './components/Weather'

const API_KEY = "b167bd2b87155a047f36518feb8b2d76"
 class App extends React.Component {
  
  constructor(props) {
  super(props)

  this.state = {
     temperature: undefined,
     city: undefined,
     country: undefined,
     humidity: undefined,
     description: undefined,
     wind: undefined,
     error: undefined
  }
}

 getWeather = async (e) => {
     e.preventDefault();
     const city =e.target.elements.city.value;
     const country =e.target.elements.country.value;
     
     const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);
     const data = await api_call.json();
     console.log(data)
     this.setState({
       temperature: data.main.temp,
       city: data.name,
     country: data.sys.country,
     humidity: data.main.humidity,
     wind: data.wind.speed,
     description: data.weather[0].description,
     error:""

     });
   }
  render() {
    return (
      <div>
        <Titles /> 
        <Forms getWeather={this.getWeather}/>
        <Weather 
        temperature = {this.state.temperature}
        city = {this.state.city}
        country = {this.state.country}
        humidity = {this.state.humidity}
        wind = {this.state.wind}
        description = {this.state.description}
        error= {this.state.error}

        />
      </div>
    )
  }
}
export default App;