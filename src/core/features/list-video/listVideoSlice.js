import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import videoApi from "../../api/videoApi"

export const fetchListVideo = createAsyncThunk(
    'listvideo/fetch_list_video',
    async (_page, thunkAPI) => {
        const response = await videoApi.getVideos({ _page: thunkAPI.getState().gListVideo._page + 1, _limit: 4 });
        return response;
    }
)

const initialState = {
    activeVideo: 0,
    _page: 0,
    listVideo: [],
    loading: true,
    error: null,
}

const listVideoSlice = createSlice({
    name: 'listVideoSlice',
    initialState,
    reducers: {
        handleChangeActiveVideo: (state, action) => {
            state.activeVideo = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchListVideo.pending, state => {
            state.loading = true
        })

        builder.addCase(fetchListVideo.fulfilled, (state, action) => {
            state.loading = false
            state._page += 1
            state.listVideo = [...state.listVideo, ...action.payload]
        })

        builder.addCase(fetchListVideo.rejected, (state, action) => {
            state.loading = false
            state.listVideo = action.payload
        })
    }
})

export default listVideoSlice.reducer

