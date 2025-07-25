export const authReducer = (state, {type, payload})=>{
    switch(type){
        case "USERNAME":
            return{
                ...state,
                username: payload
            }
        case "PASSWORD":
            return{
                ...state,
                password: payload
            }
        default:
            return state
    }
}