import { createSlice } from '@reduxjs/toolkit'
import { auth } from '../../utils/auth'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    value: 0,
    islogged: false,
    user: [],
  },
  reducers: {
    login: (state, action) => {
      state.islogged = true
      state.user = action.payload
    },
    logout: (state) => {
      state.islogged = false
    },
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions

export default authSlice.reducer
