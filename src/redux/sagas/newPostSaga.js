import axios from "axios";
import { put, takeEvery } from "redux-saga/effects";

function* addPost(action) {
  try {
   console.log("action.payload!!!!!!!!!!!!!", action.payload);
   const response = yield axios.post('/api/threads', action.payload);
   yield put({ type: "SET_THREADS", payload: response.data})
  }catch (error){
      console.log(error);
  }
}

function* newPostSaga() {
  yield takeEvery("NEW_POST", addPost);
}

export default newPostSaga;

//we are going to reuse SET_THREADS reducer