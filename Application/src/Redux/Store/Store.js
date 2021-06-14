import { configureStore } from '@reduxjs/toolkit';
import CountDownSlice from '../Slices/CountDownSlice';

export default configureStore({
    reducer:{
        CountDown: CountDownSlice
    }
})