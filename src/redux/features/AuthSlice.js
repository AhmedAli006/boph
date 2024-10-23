import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { API } from '../api/api';

const initialState = {
  userData: null,
  isLoading: false,
  isSuccess: false,
  isError: false,
};


export const login = createAsyncThunk('/api/login', async (params, thunkApi) => {
  
  try {
    const response = await API.post('/api/login', {params});
    console.log(' ~ login ~ response:', response.data);
    // console.log(' ~ login ~ params:',params);
    return response.data;
  } catch (error) {
    console.log(' ~ login ~ error:', error);
    return thunkApi.rejectWithValue(error.response.data);
  }
});
export const signup = createAsyncThunk('/api/registerUser', async (params, thunkApi) => {
  
  try {
    const response = await API.post('/api/registerUser', {params});
    console.log(' ~ signup ~ response:', response.data);
    return response.data;
  } catch (error) {
    console.log(' ~ signup ~ error:', error);
    return thunkApi.rejectWithValue(error.response.data);
  }
});



const AuthSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
  logout: (state) => {
      state.userData = null;
      state.isSuccess = false;
      state.isError = false;
    },
  },
  
  extraReducers: builder => {
    // login cases
    builder.addCase(login.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.userData = action.payload;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
    // signup cases
    builder.addCase(signup.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(signup.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isSuccess = true;
      state.userData = action.payload;
    });
    builder.addCase(signup.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});
export const { logout } = AuthSlice.actions;
export default AuthSlice.reducer;