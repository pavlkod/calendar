import { Menu} from 'antd'
import { Header } from 'antd/lib/layout/layout'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { RouteNames } from '../router'

const Navbar: FC = () => {
    const auth = useTypedSelector(state => state.auth.isAuth)
    return (
        <Header >
            <Menu theme="dark" mode="horizontal" style={{ justifyContent: 'end' }}>
                {auth
                    ?
                        <>
                           <Menu.Item key="1"> <div>User</div></Menu.Item>
                            <Menu.Item key="2"><Link to={RouteNames.LOGIN}>Выйти</Link></Menu.Item>
                        </>
                    :
                        <Menu.Item key="1"><Link to={RouteNames.LOGIN}>Login</Link></Menu.Item>
                }
            </Menu>
        </Header>
    )
}

export default Navbar
