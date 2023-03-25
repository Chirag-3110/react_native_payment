import { USER_DETAILS, USER_ID_CHANGE } from "../Constants/constants"


const getUserData=(user)=>{
    console.log("Kk")
    return {
        type:USER_DETAILS,
        payload:user
    }
}

export {getUserData}