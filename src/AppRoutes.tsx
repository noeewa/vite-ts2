
import { BrowserRouter, Routes, Route} from "react-router-dom"
import App from "./App"
import { portfolioSettings } from "./config/portfolio-setting";
import MindscapePage from "./component/mindscape";
import { Layoute } from "./component/Loading";
import { useRef } from "react";
import Redirect from "./component/redirect";
import "./index.css"

// Placeholder component for Mindscape route


export default function AppRoutes() {
    const scrollYRef = useRef(0);
    
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layoute onLoaded={() => {}}/>} >
                <Route path="/" element={<App portfolioSettings={portfolioSettings} posisi={scrollYRef} />}/>
                <Route path="mindscape" element={<MindscapePage/>} />
                {/* Catch all route for 404 */}
                <Route path="*" element={<Redirect/>} />
            </Route> 
        </Routes>
        </BrowserRouter>
    );
};