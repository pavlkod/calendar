import { Layout, Row } from 'antd'
import React, { FC } from 'react'
import EventCalendar from '../components/EventCalendar'

const Events:FC = () => {
    return (
        <Layout>
            <Row justify="center" align="middle" className="height-100">
                <EventCalendar/>
            </Row>
        </Layout>
    )
}

export default Events
