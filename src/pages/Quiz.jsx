import { useContext, useEffect, useState } from "react";
import { quizQuestions } from "../data/questions";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/UserContext";

function Quiz() {
  const [currQuestionIdx, setCurrQuestionIdx] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(15);
  const { setScore } = useContext(UserContext);
  const navigate = useNavigate();

  const enAnswer = userAnswers[currQuestionIdx] || "";

  const handleEnAns = (evt) => {
    setUserAnswers((prev) => ({
      ...prev,
      [currQuestionIdx]: evt.target.value,
    }));
  };

  const goToNext = () => {
    if (currQuestionIdx < quizQuestions.length - 1) {
      setCurrQuestionIdx((prev) => prev + 1);
      setTimeLeft(15);
    } else {
      // Calculate total score
      let totalScore = 0;
      quizQuestions.forEach((q, idx) => {
        if (userAnswers[idx] === q.answer) {
          totalScore++;
        }
      });
      setScore(totalScore);
      navigate("/result");
    }
  };

  const handlePrevQues = () => {
    if (currQuestionIdx > 0) {
      setCurrQuestionIdx((prev) => prev - 1);
      setTimeLeft(15);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev === 1) {
          clearInterval(timer);
          // Auto move next with current answer (or no answer)
          goToNext();
          return 15;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [currQuestionIdx]);

  return (
    <div className="h-screen bg-slate-200">
      <h1 className="font-medium text-3xl p-5 text-center">Quiz</h1>

      <div className="flex justify-center md:h-[70%]">
        <div className="md:relative w-[450px] md:w-[50%] bg-gray-100 rounded-xl">
          <div className="p-10 flex flex-col gap-3">
            {/* Timer */}
            <div className="flex justify-end mb-2">
              <div className="text-2xl text-red-600 font-bold">⏱ {timeLeft}s</div>
            </div>

            {/* Question */}
            <h2 className="font-semibold text-xl text-gray-700">
              {currQuestionIdx + 1}. {quizQuestions[currQuestionIdx].question}
            </h2>

            {/* Options */}
            <div>
              {quizQuestions[currQuestionIdx].options.map((opt, idx) => (
                <div key={idx} className="flex gap-2 my-2 items-center">
                  <input
                    type="radio"
                    name="option"
                    value={opt}
                    id={`option-${idx}`}
                    checked={enAnswer === opt}
                    onChange={handleEnAns}
                    className="size-5"
                  />
                  <label htmlFor={`option-${idx}`} className="text-xl cursor-pointer">
                    {opt}
                  </label>
                </div>
              ))}
            </div>

            {/* Previous Button */}
            <button
              onClick={handlePrevQues}
              disabled={currQuestionIdx === 0}
              className={`absolute bottom-2 left-2 border border-black py-1 px-3 ${
                currQuestionIdx === 0 ? "bg-orange-200 cursor-not-allowed" : "bg-orange-300 cursor-pointer"
              }`}
            >
              Previous
            </button>

            {/* Next/Submit Button */}
            <button
              onClick={goToNext}
              disabled={!enAnswer}
              className={`absolute bottom-2 right-2 border border-black py-1 px-3 ${
                !enAnswer ? "bg-green-200 cursor-not-allowed" : "bg-green-300 cursor-pointer"
              }`}
            >
              {currQuestionIdx === quizQuestions.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Quiz;
