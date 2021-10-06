import axios from "axios";
import { AppDispatcher } from "../..";
import { IUser } from "../../../models/IUser";
import { AuthActionsEnum, SetAuthAction, SetErrorAction, SetIsLoadingAction, SetUserAction } from "./types";

export const AuthActionCreators = {
    setUser: (user:IUser):SetUserAction => ({
        type: AuthActionsEnum.SET_USER,
        payload: user
    }),
    setIsAuth: (auth: boolean):SetAuthAction => ({type: AuthActionsEnum.SET_AUTH, payload: auth}),
    setIsLoading: (loading: boolean):SetIsLoadingAction => ({type: AuthActionsEnum.SET_IS_LOADING, payload: loading}),
    setError: (error: string): SetErrorAction => ({ type: AuthActionsEnum.SET_ERROR, payload: error }),
    login: (username: string, password: string) => async(dispatch:AppDispatcher) => {
        try {
            
            dispatch(AuthActionCreators.setIsLoading(true))
            setTimeout(async() => {
                const response = await axios.get<IUser[]>('../users.json')
                const user = response.data.find(value => value.username === username && value.password === password)
                if (user) {
                    localStorage.setItem('auth', 'true')
                    localStorage.setItem('username', user.username)
    
                    dispatch(AuthActionCreators.setUser(user))
                    dispatch(AuthActionCreators.setIsAuth(true))
                } else {
                    dispatch(AuthActionCreators.setError('Not found user'))
                }                
            }, 1000);
        } catch (e) {
            dispatch(AuthActionCreators.setError('Error auth'))
        }
    },
    logout: () => (dispatch: AppDispatcher) => {
        try {
            dispatch(AuthActionCreators.setIsAuth(false))
            dispatch(AuthActionCreators.setUser({} as IUser))
            dispatch(AuthActionCreators.setError(''))

            localStorage.removeItem('auth')
            localStorage.removeItem('username')
        } catch (e) {
            dispatch(AuthActionCreators.setError('Error logout'))
        }
    }
}