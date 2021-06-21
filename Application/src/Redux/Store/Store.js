import { configureStore } from '@reduxjs/toolkit';
import CountDownSlice from '../Slices/CountDownSlice';
import TabsSlice from '../Slices/TabsSlice'

export default configureStore({
    reducer:{
        CountDown: CountDownSlice,
        TabsSlice: TabsSlice
    }
})