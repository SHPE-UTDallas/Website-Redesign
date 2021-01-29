import React from 'react'
import FullCalendar from '@fullcalendar/react'
import interactionPlugin from '@fullcalendar/interaction'
import timeGridPlugin from '@fullcalendar/timegrid'
import googleCalendarPlugin from '@fullcalendar/google-calendar'

export default () => (
  <FullCalendar
    plugins={[interactionPlugin, timeGridPlugin, googleCalendarPlugin]}
    initialView='timeGridWeek'
    googleCalendarApiKey= '1094491606059-faucm7iq4tfroidsq68jve9s6kblkjhs.apps.googleusercontent.com'
    nowIndicator={true}
    editable={false}

  />
)
