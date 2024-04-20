import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import rootReducer from '../reducer';


export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: import.meta.env.NODE_ENV !== 'production',
});