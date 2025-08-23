
import { portfolioSettings } from "../config/portfolio-setting";
import { useNavigate } from "react-router-dom";
import { useLayoutEffect } from "react";


const MindscapePage = () => {
    const navigate = useNavigate();
    useLayoutEffect(()=> {
        window.scrollTo({ top: 0, behavior: "auto" });
    });
    const HnavigateClick = () => {
        navigate("/")
    }
    return (
    <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-24 px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
            <div className="relative max-w-6xl mx-auto text-center">
                <div className="space-y-8">
                    <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
                        <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
                        Personal Journey & Thoughts
                    </div>
                    
                    <div className="space-y-4">
                        <h1 className="text-6xl lg:text-8xl font-bold tracking-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
                            Mindscape
                        </h1>
                    </div>
                    
                    <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                        A collection of thoughts, experiences, and reflections from my journey in technology and life
                    </p>
                </div>
            </div>
        </section>

        {/* Enhanced Gradient Divider */}
        <div className="relative w-full h-px overflow-visible bg-gradient-to-r from-white/0 via-white/20 to-white/0">
      </div>

        {/* Timeline Section */}
        <section className="relative py-20 px-6 lg:px-8">
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-black to-gray-900/40"></div>
            <div className="relative max-w-5xl mx-auto">
                <div className="space-y-12">
                    {portfolioSettings.timeline.map((item, index) => (
                        <div key={index} className="group relative">
                            {/* Timeline connector */}
                            {index !== portfolioSettings.timeline.length - 1 && (
                                <div className="absolute left-8 top-20 w-0.5 h-full bg-gradient-to-b from-white/50 to-transparent"></div>
                            )}
                            
                            {/* Timeline dot */}
                            <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-to-r from-white/50 to-white rounded-full border-4 border-gray-900 group-hover:scale-125 transition-transform duration-300"></div>
                            
                            {/* Content card */}
                            <div className="ml-16 bg-gray-800/30 backdrop-blur-sm border border-gray-700/50 rounded-3xl p-8 hover:border-white/20 hover:bg-gray-800/40 transition-all duration-500 group">
                                {/* Gradient overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-gray-500/5 via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>
                                
                                {/* Content */}
                                <div className="relative z-10 space-y-6">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-1">
                                            <h2 className="text-2xl lg:text-3xl font-bold text-white group-hover:text-white transition-colors duration-300 mb-2">
                                                {item.headline}
                                            </h2>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-4 pl-16">
                                        {item.description.map((desc, idx) => (
                                            <p key={idx} className="text-lg text-gray-300 leading-relaxed hover:text-gray-200 transition-colors duration-300">
                                                {desc}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>

        {/* Enhanced Gradient Divider */}
        <div className="relative w-full h-px overflow-visible bg-gradient-to-r from-white/0 via-white/20 to-white/0">
        </div>
        {/* Back Button Section */}
        <section className="relative py-20 px-6 lg:px-8">
            <div className="relative max-w-4xl mx-auto text-center">
                <div className="space-y-8">
                    <div className="space-y-4">
                        <h3 className="text-3xl lg:text-4xl font-bold text-white">
                            Ready to explore more?
                        </h3>
                        <p className="text-xl text-gray-400">
                            Return to the main portfolio to see my work and projects
                        </p>
                    </div>
                    
                    <button
                        onClick={HnavigateClick}
                        className="inline-flex items-center gap-3  bg-white z-10 border hover:bg-white/100 hover:border-white hover:text-black/20 text-black font-bold px-6 py-4 rounded-none shadow-lg hover:shadow-white/10 transition-all duration-300 transform hover:scale-105"
                    >
                        <svg className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        <span>Back to Portfolio</span>
                    </button>
                </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="relative py-12 px-6 lg:px-8">
            <div className="relative w-full h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent blur-sm"></div>
      </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/50 to-transparent"></div>
            <div className="relative max-w-6xl mx-auto text-center">
                <div className="space-y-4 pt-8">
                    <p className="text-gray-600 text-sm">
                        "The mind is not a vessel to be filled, but a fire to be kindled." - Plutarch
                    </p>
                </div>
            </div>
        </footer>
    </div>
    );
}
export default MindscapePage;