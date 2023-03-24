import { configureStore, combineReducers } from '@reduxjs/toolkit';
import  studentReducer  from '../features/student/studentSlice';

const rootReducer = combineReducers(
    {
        students: studentReducer
    }
)

export const store = configureStore({
    reducer: rootReducer
})