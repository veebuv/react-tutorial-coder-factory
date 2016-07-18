import React,{Component} from 'react';
import _ from 'lodash';
import GoogleMap from '../components/google_map'

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'vertical',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    height: '300px',
    width: '300px',
  },
  temp: {
    fontSize: '200',
  },
};

class WeatherList extends Component{

  average(data){
      return _.round(_.sum(data)/data.length);
  }

  renderWeather(cityData){
      const temps = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp -273);
      const {lon,lat} = cityData.city.coord;
      return (
          <div style={styles.container}>
              <div style={styles.map}><GoogleMap lon ={lon} lat = {lat} /></div>
              <div style={styles.temp}>{this.average(temps)} C</div>
          </div>
      )
    }

    render(){
      const { weather } = this.props;
        return (
            <div>
              {_.keys(weather).length > 0 ? this.renderWeather(weather.data) : ''}
            </div>
        )
    }
}

export default (WeatherList)
