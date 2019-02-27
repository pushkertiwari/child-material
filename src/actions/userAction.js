import * as types from './actionTypes';

export const userAdd = (data) => {
    return {
        type: types.USER_NAME,
        payload: data
    }
}