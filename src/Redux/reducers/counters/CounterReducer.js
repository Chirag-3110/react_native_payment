import { INCREMENT,DECREMENT,CUSTOM_VALUE_INCREMENT,CUSTOM_VALUE_DECREMENT,CUSTOM_VALUE } from '../../Constants/constants'

const initialState={
    countValue:0,
    incrementValue:'1',   
}

const CountReducer=(state=initialState,action)=>{
    switch(action.type){
        case INCREMENT:
            return {
                ...state,
                countValue:state.countValue+1
            }
        case DECREMENT:
            return {
                ...state,
                countValue:state.countValue-1
            }
        case CUSTOM_VALUE_INCREMENT:
            return {
                ...state,
                countValue:state.countValue+parseInt(state.incrementValue)
            }
        case CUSTOM_VALUE_DECREMENT:
            return {
                ...state,
                countValue:state.countValue-parseInt(state.incrementValue)
            }
        case CUSTOM_VALUE:
            return {
                ...state,
                incrementValue:parseInt(action.payload)
            }
        default:
            return state;
    }
}

export default CountReducer;