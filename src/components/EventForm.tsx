import React, { FC } from 'react'
import { Form, Input, Button, DatePicker, Row, Select } from 'antd';
import { rules } from '../utils/rules';

const { Option } = Select;

const EventForm:FC = () => {
    return (
        <Form>
            <Form.Item
                label="Описание события"
                name="description"
                rules={[rules.required('Введите описание события!')]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Дата события"
                name="date"
                rules={[rules.required('Введите дату события!')]}
            >
                <DatePicker style={{width:'100%'}}/>
            </Form.Item>
            <Form.Item
                label="Пользователь"
                name="user"
                rules={[rules.required('Введите пользователя!')]}
            >
                <Select >
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="disabled" disabled>
                        Disabled
                    </Option>
                    <Option value="Yiminghe">yiminghe</Option>
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
