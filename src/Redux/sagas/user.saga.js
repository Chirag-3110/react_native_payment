import {takeEvery} from 'redux-saga/effects';

function* getUserData(){
    console.log("Jio")
}
function* userSaga(){
    yield takeEvery('USER_DETAILS',getUserData)
}
export default userSaga