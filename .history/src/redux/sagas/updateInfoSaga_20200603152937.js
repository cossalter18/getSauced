import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* updateInfo() {
    try {
        const response = yield axios.put("/api/user");
        console.log("++++++++++++++", response.data)
        yield put({ type: "SET_THREADS", payload: response.data });

    } catch (error) {
        console.log("Error in GET", error);
    }
}

function* updateSaga() {
    yield takeEvery("UPDATE_INFO", updateInfo);
}

export default updateSaga;
