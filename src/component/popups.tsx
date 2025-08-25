import React from "react";
import "../index.css";
import "../global.css";
import { useEffect } from "react";
import { gallerySet } from "../config/galleryset";
import Slide from "./sliderban";
import Tigadua from "./tigadua";
import { portfolioSettings } from "../config/portfolio-setting";
import { useLayoutEffect } from "react";

export type PopupProps = {
    ShowPop: boolean;
    setShowPop: (value: boolean) => void;
    variant?: "default" | "outline";
    children?: React.ReactNode;
    className?: string;
}

const Popup = ({setShowPop}:PopupProps) => {
    const HandleClick = () => {
        setShowPop(false);
    }
    useEffect(() => {
            window.scrollTo({ top: 0, behavior: "auto" });
          }
        )
    useLayoutEffect(() => {
        window.scrollTo({ top: 0, behavior: "auto" });
          
      });
    return(
        <> 
            <div className="flex-col h-fit w-full bg-black text-white pb-1 justify-items-center">
                <div className="absolute top-16 px-10 w-3/4 h-fit flex flex-row justify-between items-center text-black text-lg font-medium font-intertight p-2 rounded-md ">
                    {gallerySet.menu.map((menu, index) => 
                        <div key={index} className="hover:underline cursor-pointer">{menu}</div>
                    )}  

                </div>
                <div className="text-white w-3/4 "><img src={gallerySet.sourcelain[0]} className="w-full" /></div>
                    <div className="text-black bg-[#F5F5F5] w-3/4 text-5xl font-semibold text-start rounded-lg mt-4 p-4 px-8 font-intertight">Portfolio Gallery</div>
                    <div className="text-black bg-[#F5F5F5] w-3/4 p-12 rounded-lg shadow-lg h-fit mt-4 justify-items-start ">
                        <div className="flex w-full justify-center gap-10">
                            <p className="aligne-left font-intertight align-start justify-start items-start text-start">
                                Seni menginspirasi teknologi, teknologi menginspirasi seni.
                            </p>
                        </div>
                    {/* Enhanced Gradient Divider */}
                    <div className="bg-black/60 h-0.5 w-full my-10 " />
                    <h1>Frame Layout</h1>
                    <Slide/>
                    <div className="bg-black/60 h-0.5 w-full my-10 " />
                    <h1>Frame Layout</h1>
                    <Tigadua/>
                    <button
                        className={"eco w-fit  mx-auto mt-8 transition-all duration-300 transform hover:scale-105"}
                        onClick={HandleClick}
                    >
                        <img src="/exit.svg" className="w-28"></img>
                    </button>

                    
                    
                </div>                

                {/* Footer */}
                <div className="text-white w-3/4 flex justify-center items-center bg-[#F5F5F5] rounded-lg my-4"> 
                    <p className="text-gray-500 text-sm my-10">
                        {portfolioSettings.footerText}
                    </p> 
                </div>
            </div>
        </>
    );
}
export {Popup};