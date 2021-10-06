import { Button, Layout, Modal, Row } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import EventCalendar from '../components/EventCalendar'
import EventForm from '../components/EventForm'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IEvent } from '../models/IEvent'

const Events: FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const showModal = () => setIsModalVisible(true)
    const handleCancel = () => setIsModalVisible(false)

    const { fetchGuests, createEvent, fetchEvents } = useActions()
    const { guests, events} = useTypedSelector(state => state.event)
    const { user} = useTypedSelector(state => state.auth)
    useEffect(() => {
        fetchGuests()
        fetchEvents(user.username)
    }, [])

    const addEvent = (event:IEvent) => {
        createEvent(event)
        handleCancel()
    }

    return (
        <Layout>
            <Row justify="center" align="middle" className="height-100">
                <EventCalendar events={events}/>
            </Row>
            <Row justify="center">
                <Button onClick={showModal}>Добавить событие</Button>
            </Row>
            <Modal title="Добавить событие" visible={isModalVisible} onCancel={handleCancel} footer=''>
                <EventForm guests={guests} submit={addEvent}/>
            </Modal>
        </Layout>
    )
}

export default Events
