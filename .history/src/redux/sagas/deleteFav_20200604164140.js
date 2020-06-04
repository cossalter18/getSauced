import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* deletePost(action) {
    try {
        console.log('action.payload =======', action.payload);
        console.log('!!!!!!!!!!!!!!!!!!!!!', action);

        const response = yield axios.delete(`/api/threads/${action.payload}`)
        yield put({ type: "GET_THREADS", payload: response.data })
    } catch (error) {
        console.log("Error in DELETE!!!!!!!!!!!!!!", error);
    }
}

function* deleteSaga() {
    yield takeEvery("DELETE_POST", deletePost);
}

export default deleteSaga;