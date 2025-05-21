import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

function UserInfo() {
  const { user, setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser(e.target.value.trimStart()); // Avoid trimming full input during typing
  };

  const handleNext = () => {
    if (user.trim() !== "") {
      navigate("/Instruction");
    }
  };

  return (
    <div className="flex justify-center items-center h-[90vh] w-full">
      <div className="flex flex-col gap-10 justify-center items-center bg-slate-400 p-7 md:w-[50%] md:h-[80%] rounded-xl shadow-lg">
        <h1 className="font-medium text-3xl md:text-4xl text-white">Welcome to Quiz App!</h1>

        <div className="flex flex-col gap-5 w-full max-w-md">
          <label htmlFor="name" className="sr-only">Enter your name</label>
          <input
            id="name"
            placeholder="Enter your name"
            type="text"
            value={user}
            onChange={handleChange}
            className="py-2 px-3 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-green-700"
          />
          <button
            disabled={user.trim() === ""}
            className={`${
              user.trim() === "" ? "bg-green-500 cursor-not-allowed" : "bg-green-700 hover:bg-green-800"
            } text-white font-semibold py-2 px-4 rounded transition duration-300`}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
