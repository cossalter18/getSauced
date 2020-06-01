import axios from "axios";
import {takeEvery } from "redux-saga/effects";

function* updatePost(action) {
    console.log('UpdatePost!!!!!!!!!');
    
    try {
      const response = yield axios.put(`/api/threads/blog/${action.payload.id}`, {title: action.payload.title, body: action.payload.body})
      console.log('IN UPDATE POST PUT', response);
      
    } catch (error) {
        console.log(error);
    }
}

function* updatePostSaga() {
    yield takeEvery("UPDATE_POST", updatePost);
}

export default updatePostSaga;