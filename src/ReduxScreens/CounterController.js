import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import { useDispatch } from 'react-redux';
import { IncrementCounter,DecrementCounter,CustomDecrementCounter,CustomIncrementCounter } from '../Redux/Actions/counterAction';


const CounterController=()=>{
    const dispatch=useDispatch();
    return(
        <View style={{flexDirection: 'row',width:'100%',justifyContent:"space-around",padding:10,margin:20}}> 
            <TouchableOpacity style={styles.buttonBody} onPress={()=>dispatch(IncrementCounter())}>
                <Text style={{fontSize:30}}>+</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonBody} onPress={()=>dispatch(DecrementCounter())}>
                <Text style={{fontSize:30}}>-</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonBody} onPress={()=>dispatch(CustomIncrementCounter())}>
                <Text style={{fontSize:30}}>+*</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttonBody} onPress={()=>dispatch(CustomDecrementCounter())}>
                <Text style={{fontSize:30}}>-*</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles=StyleSheet.create({
    buttonBody:{
        backgroundColor:"#101010",
        borderRadius:50,
        width:50,
        height:50,
        alignItems: 'center',
        justifyContent:"center",
        elevation:20,
        shadowColor: 'white',
    }
})
export default CounterController