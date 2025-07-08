// src/pages/calendarPage.tsx
import React, { useState, useEffect } from 'react';
import './calendarPage.css'
import eventJson from "./events.json";  

import calendar from '../../assets/svg/event_calendar.svg';
import {EventFilter} from  './eventFilter.tsx'

import { Event, EventCalendar } from '../interfaces/event.tsx';
import { getEvents } from 'src/services/calendar/CalendarService.tsx';
  

  
  const CalendarPage: React.FC = () => {
    const [events, setEvents] = useState<Event[]>([]);
    const [eventCalendar, setEventCalendar] = useState<EventCalendar[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLocal, setSelectedLocal] = useState("");
    const [selectedDate, setSelectedDate] = useState("");
    const [selectedDesc, setSelectedDesc] = useState("");
    
    useEffect(() => {
      
      setEvents(eventJson);
      getEvents().then(setEventCalendar).catch(console.error);
    }, []);
  
    // const handleSearchChange = (e) => {
    //   setSearchTerm(e.target.value);
    // };
  
    
    const filteredEvents = eventCalendar.filter((event) => {
      return (
        event.description.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (selectedLocal ? event.local === selectedLocal : true) &&
        (selectedDate ? event.date === selectedDate : true) &&
        (selectedDesc ? event.title === selectedDesc : true)
      );
    });

    const locals = Array.from(new Set(eventCalendar.map(e => e.local)));
    const descriptions = Array.from(new Set(eventCalendar.map(e => e.description)));
    const dates = Array.from(new Set(eventCalendar.map(d => d.date)));
    const formatted = Array.from(new Set(eventCalendar.map(d => d.date)));
    const titles = Array.from(new Set(eventCalendar.map(d => d.title)));
  
    return (
      <section id="section1-calendar" className="section1-calendar"> 
        <div className="calendar-container">
          <div className="calendar-container-img">
            <img src={calendar} alt="event" className="calendar-img" />
          </div>
          <div className="calendar-search">
            <EventFilter 
              searchTerm={searchTerm}
              selectedLocal={selectedLocal}
              selectedDate={selectedDate}
              selectedDesc={selectedDesc}
              locals={locals}
              dates={dates}
              titles={titles}
              descriptions={descriptions}
              onSearchTermChange={setSearchTerm}
              onLocalChange={setSelectedLocal}
              onDateChange={setSelectedDate}
              onDescChange={setSelectedDesc}
            />
          </div>
          <div className="calendar-results">
              <div className="calendar-results-container">
                  <ul className="calendar-results-cards">
                    {filteredEvents.map((event) => {

                      const cover = event.photos.find(photo => photo.caption === 'capa');
                      const distance = event.distances.map(d => d.distance/1000);
                      const formatted = new Date(event.date).toLocaleDateString('pt-br', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric'
                      });
                      

                    return (
                      <li key={event.id} className="calendar-results-cards-info">
                        <div className="results-cards-img">
                          {cover && (
                            <img
                              key={cover.id}
                              src={cover.path}
                              alt={cover.caption}
                            />
                          )}
                        </div>
                        <div className="results-cards-info">
                          <p className="event-type">{event.title}</p>
                          <h3>{event.description}</h3>
                          <p>Data: {formatted}</p>
                          <p>Local: {event.local}</p>
                          <p>Horário: {event.time}</p>
                          {distance && <p>Distância: <b></b>
                            {distance.map(d=> ` ${d} km ` )+ ''} </p>
                          }
                        </div>
                      </li>
                      )
                    })}
                  </ul>
              </div>
          </div>
        </div>
      </section>
    );
  };
  
  export default CalendarPage;
