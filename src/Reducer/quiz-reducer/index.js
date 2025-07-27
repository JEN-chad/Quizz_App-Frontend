export const quizReducer = (state,{type, payload})=>{
   switch(type){
     case "CATEGORY":
      return{
        ...state,
        quizCategory: payload
      }  
     case "NEXT_QUESTION":
        return{
            ...state,
            index: state.index + 1,
            selectedOption: null
        }   

    case "SELECTED_OPTION":
        return{
            ...state,
            selectedOption: payload.optionId,
            score: payload.isCorrect ? state.score + 5 : state.score
        }  
    case "SUBMIT":
        return{
            ...state,
            selectedOption: null,
        }    
    case "QUIT":
        return{
           ...state,
           index: 0,
           score: 0,
           selectedOption: null
        }      
     default:
      return state;
  }
}