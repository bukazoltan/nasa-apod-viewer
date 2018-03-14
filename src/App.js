import React, { Component } from 'react';
import PictureCard from './PictureCard';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      picture: {},
      url: ""
    }
  }

  dateChange = (event) => {
    const date = event.target.value;   
    this.setState({url: `https://api.nasa.gov/planetary/apod?api_key=o9zeIdalCNpQOLdJaATzd3ZAXy77Or92YAy9RKlg&date=${date}`});
    console.log("date changed")
  }
  
  componentDidMount() {
    fetch("https://api.nasa.gov/planetary/apod?api_key=o9zeIdalCNpQOLdJaATzd3ZAXy77Or92YAy9RKlg")
      .then(response => response.json())
      .then(pictureInfo => this.setState({picture: pictureInfo}));
  }

  render() {
    const { picture } = this.state;
    if (typeof picture==="undefined") {
      return <h1>LOADING...</h1>
    }
    else {  
    return (
            <div>
              <PictureCard
                date={picture.date}
                title={picture.title}
                explanation={picture.explanation}
                url={picture.url}
                hdurl={picture.hdurl}/>
            </div>  
            );
    }
  }
}

export default App;
