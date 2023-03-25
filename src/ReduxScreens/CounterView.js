import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
import { useSelector } from 'react-redux';

const CounterView=()=>{
    let countValue=useSelector((stateValue)=>stateValue.counter)
    return(
        <View>
            <Text style={{fontSize:100}}>{countValue===undefined?'':countValue.countValue}</Text>
        </View>
    )
}
export default CounterView