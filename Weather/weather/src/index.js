import React from 'react';
import ReactDOM from 'react-dom';
import SeasonShow from '../src/components/SeasonFind.js';

class App extends React.Component{
  state = { lat: null, long: null, errorMessage: "" };
  
  componentDidMount(){
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({lat: position.coords.latitude, long: position.coords.longitude});
      },
      err => {
        this.setState({errorMessage: err.message});
      }
    );
  }

  render(){
    if(this.state.errorMessage && !this.state.lat && !this.state.long){
      return <div><h3>Error: {this.state.errorMessage} </h3></div>
    }
    if(!this.state.errorMessage && this.state.lat && this.state.long){
      return <SeasonShow lat={this.state.lat} long={this.state.long}  />
    }
    return <h3>Loading</h3>
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);