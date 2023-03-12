import { configureStore,  } from '@reduxjs/toolkit';
import usersReducer from './userSlice';
import createSagaMiddleware from 'redux-saga';
// import { getDefaultNormalizer } from '@testing-library/react';
const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];

export const store = configureStore({
  reducer: {
    users: usersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(middleware),
});

// sagaMiddleware.run()

