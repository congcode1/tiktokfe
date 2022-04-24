import { configureStore } from "@reduxjs/toolkit"
import listVideoReducer from "../features/list-video/listVideoSlice"

//cobine reducer
const rootReducer = {
    gListVideo: listVideoReducer,
}
//init store from cobined reducer
const store = configureStore({
    reducer: rootReducer,
})

export default store;