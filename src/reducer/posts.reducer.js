import { FETCH_SUCCESS_POSTS, FETCH_FAILURE_POSTS } from "../actions/actionTypes/postsTypes"
const initialState = {
    loading: true,
    posts: [],
    error: ''
}
export function posts(state = initialState, action) {
    switch (action.type) {

        case FETCH_SUCCESS_POSTS:
            return {
                loading: false,
                posts: action.payload,
                error: ''
            }
        case FETCH_FAILURE_POSTS:
            return {
                loading: false,
                posts: [],
                error: action.payload

            }
        default: return state
    }
}
