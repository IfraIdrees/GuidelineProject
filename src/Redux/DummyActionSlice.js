import {PayloadAction, createSlice} from '@reduxjs/toolkit';

import React from 'react';
import { act } from 'react-test-renderer';
import axios from 'axios';

export const defaultDummyActionState={
    fetching:false,
    dummyValue1:false,
    dummyValue2:null,
    error:null,
};
const DUMMY_API_URL='https://jsonplaceholder.typicode.com/posts';

const DummyActionSlice=createSlice({
    name:'dummy',
    initialState:defaultDummyActionState,
    reducers:{
        toggleDummyValue1(state){
            return{...state,dummyValue1: !state.dummyValue1};
        },
        dummyFetching(state){
            return{...state,fetching:true}
        },

        dummyFetchSuccess(state,action){
            return{
                ...state,
                fetching:false,
                dummyValue2:action.payload,
            };
        },

        setError(state){
            return {...state,error:'Error',fetching:false};
        },
    },
})


export const dummyFetch=()=>{
    return async(dispatch)=>{
        dispatch(dummyFetching());

        const {data}=await axios.get(DUMMY_API_URL);
        dispatch(dummyFetchSuccess(data));
    };
};

export const{
    toggleDummyValue1,dummyFetching,dummyFetchSuccess,setError
}=DummyActionSlice.actions;

export default DummyActionSlice.reducer;