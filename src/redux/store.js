import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth'

export default configureStore(
  {
    reducer: {
      auth: authReducer,
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({
      latency: 0,
    }),
)
