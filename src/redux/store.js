import {combineReducers, configureStore} from '@reduxjs/toolkit';
import {persistStore, persistReducer} from 'redux-persist';

import storage from 'redux-persist/lib/storage';
import AuthSlice from './features/AuthSlice';


const persistConfig = {
  key: 'root',
   storage,
//   storage: storage,
  whitelist: ['auth'],// name of state to be presisted
};

const reducers = combineReducers({


  auth: AuthSlice,


});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
    

   
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

const persistor = persistStore(store);
export {store, persistor};