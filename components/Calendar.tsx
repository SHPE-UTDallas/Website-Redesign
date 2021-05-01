import React from 'react'
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar'
import dayGridPlugin from '@fullcalendar/daygrid';
let googleCalendarId = 'mahirmorar17@gmail.com'

export default () => (
  <FullCalendar
    plugins={[interactionPlugin, timeGridPlugin, googleCalendarPlugin, dayGridPlugin]}
    initialView='dayGridMonth'
    nowIndicator={true}
    editable={false}
    aspectRatio={20}
    height={700}
    expandRows = {false}
    windowResize = {function(arg) {}}
    googleCalendarApiKey = 'AIzaSyD_rzbuOPEFIrO4MvihTDi7Gkyh5HXXGBo'
    eventSources = {
      googleCalendarId
    }


  />
)
