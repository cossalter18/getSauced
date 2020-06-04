import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* deleteFav(action) {
    try {
        console.log('action.payload =======', action.payload);
        console.log('!!!!!!!!!!!!!!!!!!!!!', action);

        const response = yield axios.delete(`/api/favorites/${action.payload}`)
        yield put({ type: "SET_FAVORITES", payload: response.data })
    } catch (error) {
        console.log("Error in DELETE!!!!!!!!!!!!!!", error);
    }
}

function* deleteFavSaga() {
    yield takeEvery("DELETE_FAV", deleteFav);
}

export default deleteFavSaga;