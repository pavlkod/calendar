import { Button, Layout, Modal, Row } from 'antd'
import React, { FC, useState } from 'react'
import EventCalendar from '../components/EventCalendar'
import EventForm from '../components/EventForm'

const Events: FC = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const showModal = () => setIsModalVisible(true)
    const handleOk = () => setIsModalVisible(false)
    const handleCancel = () => setIsModalVisible(false)
    return (
        <Layout>
            <Row justify="center" align="middle" className="height-100">
                <EventCalendar events={[] }/>
            </Row>
            <Row justify="center">
                <Button onClick={showModal}>Добавить событие</Button>
            </Row>
            <Modal title="Добавить событие" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel} footer=''>
                <EventForm/>
            </Modal>
        </Layout>
    )
}

export default Events
