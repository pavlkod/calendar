import { AppDispatcher } from "../..";
import UserService from "../../../api/UserService";
import { IEvent } from "../../../models/IEvent";
import { IUser } from "../../../models/IUser";
import { EventActionEnum, SetEventsAction, SetGuestsAction } from "./types";

export const EventActionCreators = {
    setGuests: (payload: IUser[]):SetGuestsAction => ({type:EventActionEnum.SET_GUESTS, payload}),
    setEvents: (payload: IEvent[]): SetEventsAction => ({ type: EventActionEnum.SET_EVENTS, payload }),
    fetchGuests: () => async (dispatch: AppDispatcher) => {
        try {
            const response = await UserService.getUsers()
           dispatch(EventActionCreators.setGuests(response.data))
        } catch (e) {
            console.log(e)
        }
    }
}