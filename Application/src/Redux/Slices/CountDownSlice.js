import { createSlice }  from '@reduxjs/toolkit';

export const CountDownSlice = createSlice({
    name:'CountDown',
    initialState:{
        count: 33
    },
    reducers:{
        countUp: (state) => {state.count++},
        countDown: (state) => {state.count--}
    }
});

export const {countUp, countDown} = CountDownSlice.actions;

export const selectCount = (state) => {return(state.CountDown.count)};

export default CountDownSlice.reducer