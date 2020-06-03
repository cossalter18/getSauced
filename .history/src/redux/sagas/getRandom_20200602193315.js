import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* getRandom(action) {
    console.log("IN API REQUEST:", action)
    try {
        const response = yield axios.get('https://spoonacular-recipe-food-nutrition-v1.p.rapidapi.com/recipes/random');
        console.log("RANDOM RECIPE!!!!!!!!!!!!!!!!!!!")
        yield put({ type: "SET_RANDOM", payload: response.data });
    } catch (error) {
        console.log("Error in GET", error);
    }
}

function* getRandomSaga() {
    yield takeEvery("GET_RANDOM", getRandom);
}

export default getRandomSaga;
