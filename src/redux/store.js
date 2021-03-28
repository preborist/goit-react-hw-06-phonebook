// import { combineReducers } from 'redux';
// import { composeWithDevTools } from 'redux-devtools-extension';
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import phonebookReducer from './phonebook/phonebook-reducer';

// -------------до toolkit--------------
// const rootReducer = combineReducers({
//   phonebook: phonebookReducer,
// });

// const store = createStore(rootReducer, composeWithDevTools());
// -------------после toolkit------------

const phonebookPersistConfig = {
  key: 'phonebook',
  storage,
  blacklist: ['filter'],
};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
];

export const store = configureStore({
  reducer: {
    phonebook: persistReducer(phonebookPersistConfig, phonebookReducer),
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);
