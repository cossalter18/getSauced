import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* addFavorites(action) {
    try {
        const response = yield axios.post("/api/favorites", action.payload );
        console.log("!!! FAVORITES !!! ========>");
        yield put({ type: "SET_FAVORITES", payload: response.data });
    } catch (error) {
        console.log("Error in FAVORITES POST", error);
    }
}

function* addFavoritesSaga() {
    yield takeEvery("ADD_FAVORITES", addFavorites);
}

export default addFavoritesSaga;
