import React ,{Component, useState}from 'react';
import { View } from 'react-native';
import useState from 'react-native'



 export default function dummy(){

    const [user,setUser]=useState();

    

    const onInputChange=(key,value)=>{
        setUser({...user,[key]:value});
    }

    return(
        <View></View>
    )

}





   