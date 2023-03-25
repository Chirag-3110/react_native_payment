import {INCREMENT,DECREMENT,CUSTOM_VALUE_INCREMENT,CUSTOM_VALUE_DECREMENT,CUSTOM_VALUE} from '../Constants/constants';

const IncrementCounter=()=>{
    return {
        type:INCREMENT,
    }
}
const DecrementCounter=()=>{
    return {
        type:DECREMENT,
    }
}
const CustomIncrementCounter=()=>{
    return {
        type:CUSTOM_VALUE_INCREMENT,
    }
}
const CustomDecrementCounter=()=>{
    return {
        type:CUSTOM_VALUE_DECREMENT,
    }
}
const CustomValueAction=(countValue)=>{
    return {
        type:CUSTOM_VALUE,
        payload:countValue
    }
}

export {IncrementCounter,DecrementCounter,CustomIncrementCounter,CustomDecrementCounter,CustomValueAction}