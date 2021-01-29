import Link from 'next/link'
import Layout from '../components/Layout'
import FullCalendar from '../components/Calendar'
import React from 'react'
import googleCalendarPlugin from '../components/Calendar'



const AboutPage = () => (
  <Layout title="SHPE Calendar">
    <FullCalendar/>
  </Layout>
)

export default AboutPage
