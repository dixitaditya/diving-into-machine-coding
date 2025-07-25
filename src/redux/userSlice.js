import {createSlice, createAsyncThunk} from "@reduxjs/toolkit"


const initialState = {
    data: null,
    loading: false,
    error: null
}


export const fetchUser = createAsyncThunk('user/fetchUser',
    async (arg, thunkApi)=> {
         return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                id: 1,
                name: 'John Doe',
                email: 'john@example.com'
                });
            }, 5000); // 1 second delay
            });
    }
)

export const userSlice = createSlice({
    name: "user",
    initialState,
    // hanldes action types generted by this slice
    reducers:{}, 
    // hanldes action types generted by other slices
    extraReducers: (builder)=>{
        builder
        .addCase(fetchUser.pending,(state)=>{
            state.loading = true
        })
        .addCase(fetchUser.fulfilled,(state, action)=>{
            console.log("action", action)
            state.loading = false
            state.data = action.payload
        })
        .addCase(fetchUser.rejected,(state, action)=>{
            state.loading = false
            state.error = action.error.message;
        })
    }

})


