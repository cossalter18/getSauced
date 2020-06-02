import axios from "axios";
import {put, takeEvery } from "redux-saga/effects";

function* updatePost(action) {
    console.log('UpdatePost!!!!!!!!!', action.payload);

    try {
        const response = yield axios.put(`/api/threads/${action.payload.id}`, action.payload)
        console.log('IN UPDATE POST PUT', response);
        yield put ({type: 'SET_THREADS'})

    } catch (error) {
        console.log(error);
    }
}

function* updatePostSaga() {
    yield takeEvery("UPDATE_POST", updatePost);
}

export default updatePostSaga;