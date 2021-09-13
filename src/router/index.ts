import React from "react";
import Events from "../pages/events";
import Login from "../pages/login";

export interface IRoute {
    path: string
    component: React.ComponentType
    exact?: boolean
}

export enum RouteNames{
    'LOGIN'= '/login',
    'EVENTS'= '/'
}

export const publicRoutes: IRoute[] = [{
    'path': RouteNames.LOGIN,
    component: Login,
    exact: true
}]
export const privateRoutes: IRoute[] = [{
    'path': RouteNames.EVENTS,
    component: Events,
    exact: true
}]