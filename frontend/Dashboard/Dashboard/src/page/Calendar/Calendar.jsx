/* eslint-disable no-restricted-globals */
import React, { useState, useEffect } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import { Paper, Stack, Alert, Snackbar } from '@mui/material';
import { formatDate } from '@fullcalendar/core';
import axios from 'axios';
import './Calendar.css';

function renderEventContent(eventInfo) {
  return (
    <>
      <b>{eventInfo.timeText}</b>
      <i>{eventInfo.event.title}</i>
    </>
  );
}

function renderSidebarEvent(event) {
  return (
    <li key={event.id}>
      <b>
        {formatDate(event.start, {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        })}
      </b>
      <i>{event.title}</i>
    </li>
  );
}

const Calendar = () => {
  const [weekendsVisible, setWeekendsVisible] = useState(true);
  const [currentEvents, setCurrentEvents] = useState([]);
  const [error, setError] = useState(null);
  const [successOpen, setSuccessOpen] = useState(false);
  const [errorOpen, setErrorOpen] = useState(false);

  const fetchEvents = async () => {
    try {
      const response = await axios.get('http://localhost:4000/events');
      const formattedEvents = response.data.map((event) => ({
        id: event._id,
        title: event.title,
        start: event.start,
        end: event.end,
        allDay: event.allDay,
      }));
      setCurrentEvents(formattedEvents);
    } catch (error) {
      console.error('Error fetching events:', error.response?.data || error.message);
      setError('Failed to fetch events. Please try again.');
      setErrorOpen(true);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleWeekendsToggle = () => {
    setWeekendsVisible(!weekendsVisible);
  };

  const handleDateSelect = async (selectInfo) => {
    let title = prompt('Please enter a new title for your event');
    let calendarApi = selectInfo.view.calendar;
    calendarApi.unselect();

    if (title) {
      const newEvent = {
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay,
      };

      try {
        const response = await axios.post('http://localhost:4000/events', newEvent, {
          headers: { 'Content-Type': 'application/json' },
        });
        const addedEvent = {
          id: response.data.event._id,
          title: response.data.event.title,
          start: response.data.event.start,
          end: response.data.event.end,
          allDay: response.data.event.allDay,
        };
        setCurrentEvents((prev) => [...prev, addedEvent]);
        setSuccessOpen(true);
      } catch (error) {
        console.error('Error adding event:', error.response?.data || error.message);
        setError('Failed to add event. Please try again.');
        setErrorOpen(true);
      }
    }
  };

  const handleEventClick = async (clickInfo) => {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}'?`)) {
      try {
        await axios.delete(`http://localhost:4000/events/${clickInfo.event.id}`);
        setCurrentEvents((prev) => prev.filter((event) => event.id !== clickInfo.event.id));
        setSuccessOpen(true);
      } catch (error) {
        console.error('Error deleting event:', error.response?.data || error.message);
        setError('Failed to delete event. Please try again.');
        setErrorOpen(true);
      }
    }
  };

  const handleClose = (_, reason) => {
    if (reason !== 'clickaway') {
      setSuccessOpen(false);
      setErrorOpen(false);
    }
  };

  return (
    <Stack direction={'row'}>
      <Paper className="demo-app-sidebar" sx={{ width: 300, padding: 2, maxHeight: '80vh', overflowY: 'auto' }}>
        <h2 style={{ textAlign: 'center' }}>All Events ({currentEvents.length})</h2>
        <ul>{currentEvents.map(renderSidebarEvent)}</ul>
      </Paper>

      <div className="demo-app-main" style={{ flex: 1 }}>
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'prev,next today',
            center: 'title',
            right: 'dayGridMonth,timeGridWeek,timeGridDay',
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          weekends={weekendsVisible}
          select={handleDateSelect}
          eventContent={renderEventContent}
          eventClick={handleEventClick}
          events={currentEvents} 
        />
      </div>

      <Snackbar
        open={successOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity="success" onClose={handleClose}>
          Event saved successfully!
        </Alert>
      </Snackbar>

      <Snackbar
        open={errorOpen}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert severity="error" onClose={handleClose}>
          {error || 'An unknown error occurred.'}
        </Alert>
      </Snackbar>
    </Stack>
  );
};

export default Calendar;
