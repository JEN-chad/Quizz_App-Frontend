import { Navbar } from "../../components/Navbar";
import { QuestionAndOptions } from "../../components/QuestionsandOptions";
import { useState, useEffect } from "react";
import axios from "axios";
import { useQuiz } from "../../context/Quiz-Context";

export const Quizz = () => {
  const [quiz, setQuiz] = useState([]);
  const { quizCategory } = useQuiz();
  console.log(quizCategory);
  useEffect(() => {
    (async () => {
      try {
        const {
          data: { data },
        } = await axios.get(
          "https://quizz-app-backend-3y9c.onrender.com/quizz",
          { headers: { authorization: localStorage.getItem("token") } }
        );
        console.log("Unfiltered data", data);
        const filteredData = data.filter(
          ({ category }) => category === quizCategory
        );
        console.log("filtered data ", filteredData);
        setQuiz(filteredData);
      } catch (err) {
        console.log(err);
      }
    })();
  }, [quizCategory]);

  return (
    <>
      <Navbar />
      {quiz && quiz.length > 0 && <QuestionAndOptions quizData={quiz} />}
    </>
  );
};
