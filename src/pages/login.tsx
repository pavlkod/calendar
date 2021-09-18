import { Card, Layout, Row } from 'antd'
import React, { FC } from 'react'
import LoginForm from '../components/LoginForm/index'

const Login:FC = (props) => {
    return (
        <Layout>
            <Row justify="center" align="middle" className="height-100">
                <Card>
                    <LoginForm/>
                </Card>
            </Row>
        </Layout>
    )
}

export default Login
