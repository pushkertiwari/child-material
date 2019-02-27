import {
    USER_NAME
} from '../actions/actionTypes';
const initialState = {
    detail: {}
}

const user = (state = initialState, action) => {
    switch (action.type) {
        case USER_NAME:
            return {
                ...state,
                detail: action.payload
            }
        default:
            return state
    }

}

export default user;