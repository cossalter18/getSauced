import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

//

function* getRandom(action) {
    console.log("IN API REQUEST:", action)
    try {
        const response = yield axios({
            "method": "GET",
            "url": "",
            "headers": {
                "content-type": "application/octet-stream",
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
                "x-rapidapi-key": "c31d4b7038mshacdc5b1ac5dafd5p11278fjsnc256fb5cf578",
                "useQueryString": true
            }, "params": {
                "number": "1",
                "tags": "sauce"
            }
        })
        yield put({ type: "SET_RANDOM", payload: response.data.recipes });
    } catch (error) {
        console.log("Error in GET", error);
    }
}

function* getRandomSaga() {
    yield takeEvery("GET_RANDOM", getRandom);
}

export default getRandomSaga;
