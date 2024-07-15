import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0 // +localStorage.getItem('counter'),
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
      localStorage.setItem('counter', String(state.value))
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    defaultCounter:(state, action)=>{
        state.value = action.payload
    }
  },
})

export const { increment, defaultCounter, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer
