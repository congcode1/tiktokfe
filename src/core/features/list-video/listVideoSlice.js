import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import videoApi from "../../api/videoApi"

export const fetchListVideo = createAsyncThunk(
    'listvideo/fetch_list_video',
    async () => {
        const response = await videoApi.getAll();
        return response;
    }
)

const initialState = {
    listVideo: [],
    loading: true,
    error: null,
}

const listVideoSlice = createSlice({
    name: 'listVideoSlice',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchListVideo.pending, state => {
            state.loading = true
        })

        builder.addCase(fetchListVideo.fulfilled, (state, action) => {
            console.log("actionzxc: ", action)
            state.loading = false
            state.listVideo = action.payload
        })

        builder.addCase(fetchListVideo.rejected, (state, action) => {
            state.loading = false
            state.listVideo = action.payload
        })
    }
})

export default listVideoSlice.reducer

