import { configureStore } from '@reduxjs/toolkit'
import authReducer from './slices/auth'
import registerReducer from './slices/register'

export default configureStore(
  {
    reducer: {
      auth: authReducer,
      register: registerReducer
    },
  },
  window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__({
      latency: 0,
    }),
)
