import { createSlice }  from '@reduxjs/toolkit';

export const TabsSlice = createSlice({
    name:'TabsSlice',
    initialState:{
        currentTab: '1',
    },
    reducers:{
        changeTab: (state, Tab) => {state.currentTab = Tab.payload },
    }
});

export const { changeTab } = TabsSlice.actions;

export const getTabNumber = (state) => {return(state.TabsSlice.currentTab)};

export default TabsSlice.reducer