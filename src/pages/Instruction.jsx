import { useNavigate } from "react-router-dom";

function Instruction() {

    const navigator = useNavigate();

    return (
        <div className="flex justify-center items-center h-[90vh] bg-gray-100 px-4">
            <div className="bg-white p-8 rounded-xl shadow-lg max-w-2xl w-full space-y-6">
                <h1 className="text-3xl font-bold text-green-700 text-center">Quiz Instructions</h1>
                <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                    <li>The quiz consists of multiple-choice questions.</li>
                    <li>Each question has only one correct answer.</li>
                    <li>You will get a limited time to answer each question.</li>
                    <li>Click on the correct option to proceed to the next question.</li>
                    <li>Your score will be shown at the end of the quiz.</li>
                </ul>
                <div className="flex justify-center">
                    <button className="mt-4 bg-green-700 text-white font-semibold px-6 py-2 rounded hover:bg-green-800 transition"
                    onClick={() => {
                        navigator("/quiz");
                    }}
                    >
                        Start Quiz
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Instruction;
