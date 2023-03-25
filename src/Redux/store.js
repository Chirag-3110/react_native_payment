import { createStore,applyMiddleware } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import rootreducer from "./reducers";
import { userSaga } from "./sagas/user.saga";
import createSagaMiddleware from "@redux-saga/core";

const sagaMiddleware=createSagaMiddleware();
// const configureStoreRedux=()=>{
//     // return createStore(rootreducer);
//     // userMiddleware.run(userSaga);
//     return configureStore({
//         reducer:rootreducer,
//         middleware:()=>[userMiddleware]
//     })
// }
const store = createStore(
    rootreducer,
    // applyMiddleware(
    //   sagaMiddleware,
    // ),
  );
// sagaMiddleware.run(userSaga);
export {store};