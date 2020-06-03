import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* addFavorites() {
    try {
        const response = yield axios.post("/api/favorites", );
        console.log("!!! FAVORITES !!! ========>", response.data);
        yield put({ type: "SET_FAVORITES", payload: response.data });
    } catch (error) {
        console.log("Error in FAVORITES POST", error);
    }
}

function* addFavoritesSaga() {
    yield takeEvery("ADD_FAVORITES", addFavorites);
}

export default addFavoritesSaga;
