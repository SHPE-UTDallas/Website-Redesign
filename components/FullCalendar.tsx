import React from "react"
import Calendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import googleCalendarPlugin from '@fullcalendar/google-calendar';
import CalendarJson from '../data/Calendar.json'

//https://stackoverflow.com/questions/66750199/fullcalendar-nextjs-dynamic-import-doesnt-show-calendar
export default function FullCalendar(props) {
    return (
       <Calendar {...props} plugins={[dayGridPlugin, googleCalendarPlugin]} initialView="dayGridMonth"
          googleCalendarApiKey = {CalendarJson.googleCalendarApiKey}
          events = {{
            googleCalendarId: CalendarJson.googleCalendarId
          }} />
    );
}