import React from 'react'
import { Redirect, Route, Switch } from 'react-router'

import { privateRoutes, publicRoutes, RouteNames} from '../router'

interface Props {
    
}

const AppRouter = (props: Props) => {
    const auth = true
    return (
        auth
            ?
            <Switch>
                {privateRoutes.map(route => <Route {...route} />)}
                <Redirect to={ RouteNames.EVENTS}/>
            </Switch>
            :
            <Switch>
                {publicRoutes.map(route => <Route {...route} />)}
                <Redirect to={ RouteNames.LOGIN}/>
            </Switch>
    )
}

export default AppRouter
