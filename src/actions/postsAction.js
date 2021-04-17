import axios from "axios"
import { FETCH_SUCCESS_POSTS, FETCH_FAILURE_POSTS } from "./actionTypes/postsTypes"

export const fetchPostsSuccess = posts => {
    return {
        type: FETCH_SUCCESS_POSTS,
        payload: posts
    }
}
export const fetchPostsFailure = error => {
    return {
        type: FETCH_FAILURE_POSTS,
        payload: error
    }
}
export const fetchPosts = () => {
    return (dispatch) => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                const posts = response.data
                dispatch(fetchPostsSuccess(posts))
            })
            .catch((err) => {
                const errMsg = err.massage
                dispatch(fetchPostsFailure(errMsg))
            });
    }

}