import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* getRandom(action) {
    try {
        const response = yield axios.get('https://api.spoonacular.com/recipes/random);
        console.log("MADE IT TO getDetail SAGA!!!!!!")
        yield put({ type: "SET_DETAILS", payload: response.data });
    } catch (error) {
        console.log("Error in GET", error);
    }
}

function* getRandomSaga() {
    yield takeEvery("GET_RANDOM", getRandom);
}

export default getRandomSaga;
