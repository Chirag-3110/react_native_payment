import React, { useDebugValue, useEffect, useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import CounterController from './src/ReduxScreens/CounterController';
import CounterView from './src/ReduxScreens/CounterView';
import { CustomValueAction } from './src/Redux/Actions/counterAction';
import { getUserData } from './src/Redux/Actions/userAction';
import RNUpiPayment from 'react-native-upi-pay';

const App = () => {

  let countData=useSelector(state=>state.counter)
  const dispatch=useDispatch();

  const open=async()=>{
    await  RNUpiPayment.initializePayment({
      vpa: '8955909991@paytm',  		//your upi address like 12345464896@okhdfcbank
      payeeName: 'ayushi',   			// payee name 
      amount: '1',				//amount
      transactionNote:'Testing Upi',		//note of transaction
      transactionRef: 'aasf-332-aoei-fn'	//some refs to aknowledge the transaction
  },(res)=>{console.log(res,"Success")},()=>{console.log("faile")});
  }
  return (
    <View style={styles.container}>
      <Button 
      title={"click"}
              onPress={()=>open()}
          />
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent: 'center',
    backgroundColor:"white"
  }
});

export default App;
