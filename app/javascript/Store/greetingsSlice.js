import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchGreetings = createAsyncThunk('greetings/fetchGreetings', async () => {
  const response = await fetch('/api/v1/messages');
  const greetings = await response.json();
  return greetings;
});

/* eslint-disable no-param-reassign */
export const greetingsSlice = createSlice({
  name: 'greetings',
  initialState: {
    greeting: '',
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: {
    [fetchGreetings.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchGreetings.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.greetings = action.payload;
    },

    [fetchGreetings.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    },
  },
});
/* eslint-enable no-param-reassign */
export default greetingsSlice.reducer;
