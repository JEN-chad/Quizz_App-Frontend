export const authReducer = (state, { type, payload }) => {
  switch (type) {
    case "TOKEN":
      return {
        ...state,
        token: payload,
      };

    case "USERNAME":
      return {
        ...state,
        username: payload,
      };
    case "PASSWORD":
      return {
        ...state,
        password: payload,
      };
    case "CLEAR_FORM_DATA":
      return {
        ...state,
        username: "",
        password: "",
      };
    case "TOKEN":
      return {
        ...state,
        token: payload,
      };
    case "LOGOUT":
        return{
            ...state,
            username: "",
            password: "",
            token: ""
        } 
    case "CATEGORY":
      return{
        ...state,
        quizCategory: payload
      }    
    default:
      return state;
  }
};
