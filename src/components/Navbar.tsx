import { Menu} from 'antd'
import { Header } from 'antd/lib/layout/layout'
import { FC } from 'react'
import { Link } from 'react-router-dom'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { RouteNames } from '../router'

const Navbar: FC = () => {
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const { logout} = useActions()
    return (
        <Header >
            <Menu theme="dark" selectable={false} mode="horizontal" style={{ justifyContent: 'end' }}>
                {isAuth
                    ?
                        <>
                           <Menu.Item key="1"> <div>{user.username}</div></Menu.Item>
                            <Menu.Item key="2" onClick={logout}><Link to={RouteNames.LOGIN}>Выйти</Link></Menu.Item>
                        </>
                    :
                        <Menu.Item key="1"><Link to={RouteNames.LOGIN}>Login</Link></Menu.Item>
                }
            </Menu>
        </Header>
    )
}

export default Navbar
