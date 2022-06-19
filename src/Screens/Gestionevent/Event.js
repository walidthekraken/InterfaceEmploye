import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Event.css';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const events = [

  {
      title: "Big Meeting",
      allDay: true,
      start: new Date(2022, 6, 0),
      end: new Date(2022, 6, 0),
  },
  {
      title: "Vacation",
      start: new Date(2022, 6, 7),
      end: new Date(2022, 6, 10),
  },
  {
      title: "Conference",
      start: new Date(2022, 6, 20),
      end: new Date(2022, 6, 23),
  },
];
function Gestionevent() {
  const [value, onChange] = useState(new Date());
  const [newEvent, setNewEvent] = useState({ title: "", start: "", end: "" });
  const [allEvents, setAllEvents] = useState(events);
 
  function handleAddEvent() {
    setAllEvents([...allEvents, newEvent]);
    
}
function TimeLine() {
  const hoursInDay = 6;
  const daysToTest = 1;
 
  const hours = new Array(hoursInDay * daysToTest)
    .fill(null)
    .map((item, index) => index);
  const timeLine = hours.map((item) => {
    if(item>2){
    return (
        <p className='timeline' key={item}>1{item % 24}:30 PM</p>
    );
  }
  });

  return <p className='timeline'>{timeLine}</p>;
}
const toCalendarType = (weekStartDay) =>
  weekStartDay === 0 ? 'US' : 'ISO 8601'
  return (
    <div className = "react-calendar-container">
      <Calendar  calendarType={toCalendarType(0)} events={allEvents}  startAccessor="start" endAccessor="end" onChange={onChange} value={value} />
      <hr></hr>
      <div ><TimeLine />
      <p class="timeline ev"> Evénement 1 
      <p style= {{ color: "rgba(40, 51, 59, 0.75)",marginTop :"-6px", fontFamily: "Poppins" , fontSize: "15px"}}> 13:30  PM - 14:00 PM</p>
      </p>
      
      <p className="timeline ev child"> Evénement 3
  
      <p style= {{ color: "rgba(40, 51, 59, 0.75)",marginTop :"-6px", fontFamily: "Poppins" , fontSize: "15px"}}> 14:15  PM - 15:10 PM</p>
      </p>
      <p className='timeline ev child2'> Evénement 2
      <p style= {{ color: "rgba(40, 51, 59, 0.75)",marginTop :"-6px", fontFamily: "Poppins" , fontSize: "15px"}}> 15:30 PM - 17:10 PM</p></p>

      </div>
      <p className="verticalLine"></p>
     
      
      <div className='event'>
      <p>Evénements</p>
      <ul className='event ev'>
   
        Evénement 1   
        <div className='rectangle'></div>
        {/* <img src={require('../../res/Event/fleche.png')}></img>
        <img src={require('../../res/Event/Vector.png')}></img> */}
        Evénement 2
        <div className='rectangle l'></div>
        {/* <img src={require('../../res/Event/fleche.png')} ></img>
        <img src={require('../../res/Event/Vector.png')}></img> */}
        Evénement 3
        <div className='rectangle o'></div>
        {/* <img src={require('../../res/Event/fleche.png')} ></img>
        <img src={require('../../res/Event/Vector.png')}></img> */}
        </ul>
       
        </div>
        <div className= 'lol'>
        <img  src={require('../../res/Event/vecc.png')} ></img>   
        </div>
       
    </div>

    
  );
}
export default Gestionevent;
