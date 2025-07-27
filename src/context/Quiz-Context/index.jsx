import { createContext, useContext, useReducer } from "react";
import { quizReducer } from "../../Reducer/quiz-reducer";

const quizContext = createContext();
const initialState = {
  score: 0,
  index: 0,
  quizCategory: "",
  selectedOption: ""
};
const QuizProvider = ({ children }) => {
  const [{ score, index, quizCategory, selectedOption }, quizDispatch] = useReducer(
    quizReducer,
    initialState
  );
  return (
    <quizContext.Provider value={{ score, index, quizCategory, selectedOption, quizDispatch }}>
      {children}
    </quizContext.Provider>
  );
};

const useQuiz = () => useContext(quizContext);

export { useQuiz, QuizProvider };
