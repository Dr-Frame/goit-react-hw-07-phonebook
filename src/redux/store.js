import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import {
  persistStore,
  persistReducer,
  FLUSH,
  PAUSE,
  PURGE,
  PERSIST,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import contactReducer from './contacts/contacts-reducer';

/* const contactsPersistConfig = {
  key: 'contactsDb',
  storage,
  blacklist: ['filter'],
}; */

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const store = configureStore({
  reducer: {
    contact: contactReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

/* const persistor = persistStore(store); */
export default store;
