import React from 'react';
import { Component } from 'react';
import SearchBar from '../containers/searchBar'
import WeatherList from '../containers/weather_list'
import axios from 'axios';

const API_KEY = '3e37a8d02f7a9d89bdf045c664fd5cdc';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export default class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      apiRequest: [],
    }
    this.fetchWeather = this.fetchWeather.bind(this);
  };

  fetchWeather(city) {
      const URL = `${ROOT_URL}&q=${city}`;
      const request = axios.get(URL);
      let data;
      request.then((result) => {
        this.setState({
          apiRequest: result,
        })
     });
  }

  render() {
    const { apiRequest } = this.state;
    return (
        <div>
          <SearchBar invokeFunction={this.fetchWeather}/>
          <WeatherList weather={apiRequest}/>
        </div>
    );
  }
}
