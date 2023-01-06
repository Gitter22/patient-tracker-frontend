import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

const userAPI = {
    login: (credentials) => {
        return axios.post('', credentials)
    }
}

const loginAPI = createAsyncThunk(
    'auth/login',
    async (credentials, thunkAPI) => {
        const response = await userAPI.login(credentials)
        return response.data
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: null,
        loading: false
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(loginAPI.fulfilled, (state, action) => {
            state.user = action.payload
        })
        builder.addCase(loginAPI.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(loginAPI.rejected, (state, action) => {
            state.user = null
        })
    },
})

export default authSlice.reducer


