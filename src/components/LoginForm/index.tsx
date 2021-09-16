import { FC } from 'react'
import { Form, Input, Button } from 'antd';

import styles from './index.module.css'

const LoginForm:FC = () => {
    return (
        <Form name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            className={styles.form}
        >
            <Form.Item
                label="Имя пользователя"
                name="username"
                rules={[{ required: true, message: 'Введите имя пользователя!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                label="Пароль"
                name="password"
                rules={[{ required: true, message: 'Введите пароль!' }]}
            >
                <Input.Password />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                Submit
                </Button>
            </Form.Item>
        </Form>
    )
}

export default LoginForm
