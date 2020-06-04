import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* getDetail(action) {
    try {
        const id = action.payload
        const response = yield axios.get(`/api/favorites/show/${id}`);
        console.log("MADE IT TO getDetail SAGA!!!!!!")
        yield put({ type: "SET_DETAILS", payload: response.data });
    } catch (error) {
        console.log("Error in GET", error);
    }
}

function* getDetailsSaga() {
    yield takeEvery("GET_DETAILS", getDetail);
}

export default getDetailsSaga;
