import { FETCH_SUCCESS_DETAILPOST, FETCH_FAILURE_DETAILPOST } from "../actions/actionTypes/detailpostTypes"
const initialState = {
    loadingDetail: true,
    post: [],
    error: ''
}
export function detailpost(state = initialState, action) {
    switch (action.type) {
        case FETCH_SUCCESS_DETAILPOST:
            return {
                loadingDetail: false,
                post: action.payload,
                error: ''
            }
        case FETCH_FAILURE_DETAILPOST:
            return {
                loadingDetail: false,
                post: [],
                error: action.payload

            }
        default: return state
    }
}
