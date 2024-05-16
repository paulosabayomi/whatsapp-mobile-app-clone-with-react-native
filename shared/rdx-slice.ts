import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { IMainSlice, TColorMode, TMessage } from './types'



// Define the initial state using that type
const initialState: IMainSlice = {
    user_details: {
        id: 200,
        name: "Paulos Ab",
        profile_picture: "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1203.jpg"
    },
    messages: [],
    mode: 'light',
}

export const mainSlice = createSlice({
  name: 'main',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    setMessage: (state, action: PayloadAction<TMessage>) => {
      state.messages.push(action.payload)
    },
    setColorMode: (state, action: PayloadAction<TColorMode>) => {
      state.mode = action.payload
    },
  },
})

export const { 
    setMessage,
    setColorMode
} = mainSlice.actions

export default mainSlice.reducer