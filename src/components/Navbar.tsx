import { Menu} from 'antd'
import { Header } from 'antd/lib/layout/layout'
import React, { FC } from 'react'

const Navbar:FC = () => {
    return (
        <Header >
            <Menu theme="dark" mode="horizontal" style={{justifyContent:'end'}}>
                <Menu.Item key="1">Login</Menu.Item>
            </Menu>
        </Header>
    )
}

export default Navbar
