import React, { Component } from 'react';
import PictureCard from './PictureCard';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
//import DateSelector from './DateSelector';
import 'react-datepicker/dist/react-datepicker.css';
import './App.css';



class App extends Component {
  constructor(props) {
    super(props);
    this.handleDayClick = this.handleDayClick.bind(this);
    this.state = {
      todayDate: {},
      selectedDay: undefined,
      picture: {},
      queryString: "",
      currentUrl: "https://api.nasa.gov/planetary/apod?api_key=o9zeIdalCNpQOLdJaATzd3ZAXy77Or92YAy9RKlg"
    }
  }

  getTodayDate() {
    const today = new Date();
    const dd = today.getDate();
    const mm = today.getMonth();

    const yyyy = today.getFullYear();
    const date = {day:dd,
                    month:mm,
                    year:yyyy};
    this.setState({todayDate: date})
  }

  generateQueryString(day) {
    //console.log(day.getFullYear());
  }

  handleDayClick(day, {selected}) {
    if (selected) {
      // Unselect the day if already selected
      this.setState({ selectedDay: undefined });
      return;
    }
    this.setState({ selectedDay: day }) 
    //this.generateQueryString(this.state.selectedDay)
  }



  componentDidMount() {
    fetch(this.state.currentUrl)
      .then(response => response.json())
      .then(pictureInfo => this.setState({ picture: pictureInfo }));
    this.getTodayDate();
  }

  render() {
    const { picture, todayDate } = this.state;
    if (typeof picture === "undefined") {
      return <h1>LOADING...</h1>
    }
    else {
      return (
        <div>
          <DayPicker
            disabledDays={{before: new Date(1995, 5, 16),
                          after: new Date(todayDate.year, todayDate.month, todayDate.day)
                        }}
            onDayClick={this.handleDayClick}
            selectedDays={this.state.selectedDay}
          />
          {this.state.selectedDay ? (
            <p>You clicked {this.state.selectedDay.toLocaleDateString()}</p>
          ) : (
              <p>Please select a day.</p>
            )}
          <PictureCard
            date={picture.date}
            title={picture.title}
            explanation={picture.explanation}
            url={picture.url}
            hdurl={picture.hdurl} />
        </div>
      );
    }
  }
}

export default App;
