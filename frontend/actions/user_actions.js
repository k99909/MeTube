import * as UtilUserAPI from '../utils/user_api_util';

export const RECEIVE_USER = "RECEIVE_USER";
// export const RECEIVE_USERS = "RECEIVE_USERS"

const receiveUser = user => ({
    type: RECEIVE_USER,
    user
})

export const fetchUser = userId => dispatch => (
    UtilUserAPI.fetchUser(userId)
        .then(user => dispatch(receiveUser(user)))
)