import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../context/UserContext"; // ✅ Correct import

function Result() {
    const { score, user, setUser } = useContext(UserContext); // ✅ Get both user and score

    return (
        <div className="bg-slate-200 h-screen">
            <h1 className="text-center font-medium text-3xl p-3">Result</h1>
            <div className="flex justify-center">
                <div className="flex flex-col p-5 w-[450px] h-[200px] gap-3 rounded justify-center items-center bg-gray-100">
                    <h2 className="text-2xl font-semibold">Hi {user || "User"}!</h2>
                    <div>
                        <i className="text-xl">
                            Your Score is{" "}
                            <mark className="px-3 font-bold"> {score} </mark>
                        </i>
                    </div>
                </div>
            </div>
            <div className="text-center my-5">
                <Link to={"/"} onClick={() => {
                    setUser("")
                }}
                    className="bg-gray-400 py-2 px-3 text-center rounded">
                    Home
                </Link>
            </div>
        </div>
    );
}

export default Result;
