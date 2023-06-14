import { createSlice, configureStore } from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'testingRedux',
    initialState: {
        name: 'pratik',
        address: 'Gadge Nagar',
        age: 27
    },
    reducers: {
        changeDefaultNameToUpperCase(state) {
            //mutate states here in the reducer functions
            state.name = state.name.toUpperCase();
        },
        changeAddress(state, action) {
            state.address = action.payload;
        },
        changeAge(state) {
            state.age = state.age + 1;
        }
    }
})

// for multiple reducers in practice there might be multiple slice you can create 
// now we have only one userSlice may be in future there will be employeSlice,... and so on
// const store = configureStore({
//     reducer: { user: userSlice.reducer }
// });

// OR

// for single reducer
const store = configureStore({
    reducer: userSlice.reducer
});

export const userActions = userSlice.actions;

export default store;


