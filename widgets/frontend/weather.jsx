import React from 'react';

class Weather extends React.Component {
  constructor(prop){
    super(prop);
    this.state = { weather: { name: null, main: { temp: null } } };
  }

  toQueryString(query){
    return Object.keys(query).map(k => `${k}=${query[k]}`).join('&');
  }

  getWeather() {
    navigator.geolocation.getCurrentPosition((pos) => {
      const reactComponent = this;
      let query = {
        lat: pos.coords.latitude,
        lon: pos.coords.longitude,
        APPID: 'f816d7f39052e3a98b21952097a43076'
      };
      let queryString = this.toQueryString(query);

      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'http://api.openweathermap.org/data/2.5/weather?' + queryString);

      xhr.onload = function () {
        // console.log(xhr.status);
        console.log(JSON.parse(xhr.response));

        reactComponent.setState({ weather: JSON.parse(xhr.response) });
      };

      xhr.send();
    });
  }

  render(){
    const [city, temperature] = [
      this.state.weather.name,
      Math.floor(this.state.weather.main.temp)
    ];
    return (
      <div className="weather">
        <div className="city">{city}</div>
        <div className="temperature">{temperature - 272}˚C</div>
      </div>
    );
  }

  componentDidMount() {
    this.getWeather();
  }

  // getPosPromise(url){
  //   return new Promise((resolve, reject) => {
  //     navigator.geolocation.getCurrentPosition((pos) => {
  //       resolve({
  //         lat: pos.coords.latitude,
  //         lon: pos.coords.longitude,
  //         APPID: 'f816d7f39052e3a98b21952097a43076'
  //       });
  //     });
  //   });
  // }
}
export default Weather;
