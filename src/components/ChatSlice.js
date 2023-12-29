import { createSlice } from "@reduxjs/toolkit";

const ChatSlice = createSlice({
  name: "chat",
  initialState: {
    messages: [],
  },
  reducers: {
    addMessage: (state, action) => {
      state =
        // state.messages.length <= 10
        //   ? 
        state.messages.push(action.payload)
        //   : state.messages.length === 0;
    },
  },
});

export default ChatSlice.reducer;
export const { addMessage } = ChatSlice.actions;
