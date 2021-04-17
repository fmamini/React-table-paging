import { combineReducers } from 'redux';
import { posts } from './posts.reducer'
import { detailpost } from './detailpost.reducer'

const rootReducer = combineReducers({
    posts,
    detailpost
});

export default rootReducer;