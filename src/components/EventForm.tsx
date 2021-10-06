import React, { FC, useState } from 'react'
import { Form, Input, Button, DatePicker, Row, Select } from 'antd';
import { rules } from '../utils/rules';
import { IUser } from '../models/IUser';
import { IEvent } from '../models/IEvent';
import { Moment } from 'moment';
import { formatDate } from '../utils/date';
import { useTypedSelector } from '../hooks/useTypedSelector';

const { Option } = Select;

interface EventProps{
    guests: IUser[],
    submit: (event:IEvent) => void
}

const EventForm: FC<EventProps> = (props) => {
    const [event, setEvent] = useState<IEvent>({
        author: '',
        description: '',
        date: '',
        guest: ''
    } as IEvent)
    const selectGuest = (guest:string) => setEvent({...event, guest})
    const selectDate = (date: Moment | null) => {
        if (date) {
            setEvent({...event, date: formatDate(date.toDate())})
        }
    }
    const {user } = useTypedSelector(state => state.auth)
    const formSubmit = () => {
        props.submit({ ...event, author: user.username });
        
    }
    return (
        <Form onFinish={formSubmit}>
            <Form.Item
                label="Описание события"
                name="description"
                rules={[rules.required('Введите описание события!')]}
            >
                <Input value={event.description} onChange={ (e) => setEvent({...event, description: e.target.value}) }/>
            </Form.Item>
            <Form.Item
                label="Дата события"
                name="date"
                rules={[rules.required('Введите дату события!'), rules.isDateAfter('Некорректная дата')]}
            >
                <DatePicker style={{ width: '100%' }} onChange={selectDate}/>
            </Form.Item>
            <Form.Item
                label="Выберите гостя"
                name="user"
                rules={[rules.required('Введите имя гостя!')]}
            >
                <Select onChange={selectGuest}>
                    {props.guests.map((guest, i) => <Option key={i} value={guest.username}>{guest.username}</Option>)}
                </Select>
            </Form.Item>
            <Row justify="end">
                <Form.Item>
                    <Button type="primary" htmlType="submit" >
                    Submit
                    </Button>
                </Form.Item>
            </Row>
        </Form>
    )
}

export default EventForm
