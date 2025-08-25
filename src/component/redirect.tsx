
import { useNavigate } from "react-router-dom";
export default function Redirect() {
    const navigate = useNavigate()
    const handleClick = () => {
        navigate("/")
    }
    return(
        <div className="min-h-screen bg-black text-white flex items-center justify-center">
            <div className="text-center space-y-4">
                <h1 className="text-4xl font-bold">404</h1>
                <p className="text-gray-400">Page not found</p>
                <button
                    onClick={handleClick}
                    className="inline-block mt-4 px-6 py-2 bg-cyan-400 text-black rounded hover:bg-cyan-300 transition-colors"
                >
                    Back to Home
                </button>
            </div>       
        </div>
    );
}