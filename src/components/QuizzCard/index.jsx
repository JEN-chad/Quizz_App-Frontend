import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/Auth-Context";
import { useQuiz } from "../../context/Quiz-Context";

export const QuizzCard = ({ quizCategory }) => {

  const { image, title, description, category } = quizCategory;
  const  token = localStorage.getItem("token"); 
  const { quizDispatch } = useQuiz();
  const nav = useNavigate();

  const handleQuizzplay = () => {
    if (token) {
      quizDispatch({
        type: "CATEGORY",
        payload: category
      })
      nav("/quizz");
      console.log(token)
    }else{
      nav("auth/login");
    }
  };

  
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="h-48 bg-gray-100">
        <img
          src={image}
          alt="Quiz Thumbnail"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-1">{title}</h3>
        <p className="text-gray-600 text-sm mb-4">{description}</p>
        <button
          className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors"
          onClick={handleQuizzplay}
        >
          Play Now
        </button>
      </div>
    </div>
  );
};
