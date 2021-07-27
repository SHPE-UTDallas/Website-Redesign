import React from 'react'

import dynamic from 'next/dynamic';
import Layout from '../components/Layout';

const FullCalendar = dynamic(() => import('../components/FullCalendar'), {
    ssr: false
});

const CalendarPage = () => {
    return (
    <Layout title="SHPE Calendar">
      <FullCalendar />
    </Layout>)
}

export default CalendarPage;