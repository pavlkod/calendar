import { Redirect, Route, Switch } from 'react-router'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { privateRoutes, publicRoutes, RouteNames} from '../router'

interface Props {
    
}

const AppRouter = (props: Props) => {
    const auth = useTypedSelector(state => state.auth.isAuth)
    return (
        auth
            ?
            <Switch>
                {privateRoutes.map(route => <Route key={route.path} {...route} />)}
                <Redirect to={ RouteNames.EVENTS}/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route => <Route key={route.path}  {...route} />)}
                <Redirect to={ RouteNames.LOGIN}/>
            </Switch>
    )
}

export default AppRouter
