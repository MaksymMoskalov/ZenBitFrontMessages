import { reqestSendMessage } from 'service/APIservice';

const { createAsyncThunk } = require('@reduxjs/toolkit');

export const sendMessage = createAsyncThunk(
  'message/sendMessage',
  async (data, thunkAPI) => {
    try {
      const result = await reqestSendMessage(data);
      return result;
    } catch (error) {
      thunkAPI.rejectWithValue(error.message);
    }
  }
);
