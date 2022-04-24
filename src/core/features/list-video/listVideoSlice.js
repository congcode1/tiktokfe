import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import videoApi from "../../api/videoApi"

export const fetchListVideo = createAsyncThunk(
    'listvideo/fetch_list_video',
    async (_page) => {
        const response = await videoApi.getVideos({ _page, _limit: 4 });
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
            state.loading = false
            state.listVideo = [...state.listVideo, ...action.payload]
        })

        builder.addCase(fetchListVideo.rejected, (state, action) => {
            state.loading = false
            state.listVideo = action.payload
        })
    }
})

export default listVideoSlice.reducer

