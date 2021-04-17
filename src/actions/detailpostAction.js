import axios from "axios"
import { FETCH_SUCCESS_DETAILPOST, FETCH_FAILURE_DETAILPOST } from "./actionTypes/detailpostTypes"
export const fetchDetailPostSuccess = post => {
    return {
        type: FETCH_SUCCESS_DETAILPOST,
        payload: post
    }
}
export const fetchDetailPostFailure = error => {
    return {
        type: FETCH_FAILURE_DETAILPOST,
        payload: error
    }
}
export const fetchDetailPost = (id) => {
    debugger
    return (dispatch) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then((response) => {
                const post = response.data
                dispatch(fetchDetailPostSuccess(post))
            })
            .catch((err) => {
                const errMsg = err.massage
                dispatch(fetchDetailPostFailure(errMsg))
            });
    }

}