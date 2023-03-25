import { USER_ID_CHANGE,USER_LOGGED_CHANGE,USER_NAME_CHANGE,USER_DETAILS } from "../../Constants/constants"; 

const initialState={
    id:"",
    name:"",
    isLoggedin:false,
    userDetails:{}
};

const userReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case USER_ID_CHANGE:
            return {
                ...state,id:actions.id
            }
        case USER_NAME_CHANGE:
            return {
                ...state,name:actions.name
            };
        case USER_LOGGED_CHANGE:
            return {
                ...state,isLoggedin:actions.isloggin
            };
        case USER_DETAILS:
            return{
                ...state,userDetails:actions.payload
            }
        default:
            return state;
    }
}

export default userReducer;
