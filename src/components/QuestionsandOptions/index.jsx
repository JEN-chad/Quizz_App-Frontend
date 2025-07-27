import { useQuiz } from "../../context/Quiz-Context";
import { useNavigate } from "react-router-dom";

export const QuestionAndOptions = ({ quizData }) => {
  const { index, score, selectedOption, quizDispatch } = useQuiz();
  const nav = useNavigate();
  const [currentquiz] = quizData;
  const { title, quizz } = currentquiz;

  const handleNextQuestionClick = () => {
    if (index + 1 != quizz.length) {
      quizDispatch({
        type: "NEXT_QUESTION",
      });
    } else {
      quizDispatch({
        type: "QUIZ_SUBMIT",
      });
      nav("/result");
    }
  };

  const handleQuitQuiz = () => {
    quizDispatch({
      type: "QUIT",
    });
    nav("/");
  };

  const handleSelectedoption = (optionId, isCorrect) => {
    quizDispatch({
      type: "SELECTED_OPTION",
      payload: { optionId, isCorrect },
    });
  };

  return (
    <main className="flex justify-center items-center min-h-screen bg-teal-50">
      <section className="bg-white shadow-lg rounded-xl p-6 w-[90%] max-w-2xl space-y-6">
        <h2 className="text-3xl font-bold text-center text-teal-700">
          {title}
        </h2>

        <div className="flex justify-between text-sm text-teal-600">
          <span>
            Question: {index + 1}/{quizz.length}
          </span>
          <span className="font-semibold">Score: {score}</span>
        </div>

        <div className="text-lg font-medium text-gray-800">
          <span>
            Q{index + 1}: {quizz[index].question}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {quizz[index].options.map(({ id, ans, isCorrect }) => (
            <button
              onClick={() => handleSelectedoption(id, isCorrect)}
              key={id}
              className={`py-2 rounded-md font-semibold shadow text-teal-800 ${selectedOption? isCorrect ? "bg-green-600 text-white"  : selectedOption === id  ? "bg-red-400 text-white"  : "bg-teal-100 hover:bg-teal-300"  : "bg-teal-100 hover:bg-teal-300"  } `}
              disabled={selectedOption} >
              {ans}
            </button>
          ))}
        </div>

        <div className="flex justify-end gap-4 mt-6">
          <button
            onClick={handleQuitQuiz}
            className="bg-red-100 hover:bg-red-300 text-red-700 py-2 px-4 rounded-md font-medium"
          >
            Quit
          </button>
          <button
            className="bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-md font-medium"
            onClick={handleNextQuestionClick}
          >
            {index + 1 === quizz.length ? "Submit" : "Next Question"}
          </button>
        </div>
      </section>
    </main>
  );
};
