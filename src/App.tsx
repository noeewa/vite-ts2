
import './App.css'
import * as React from "react"
import './App.css';
import "./index.css"
import "./global.css"

//SUPABASE

// Import Lainya
import { Button } from "./component/button"
import { Card, CardContent} from "./component/card"
import type { PortfolioSettings } from "./config/portfolio-setting"
import FotoP from "./component/pp"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./component/carousel"
import { MapPin, Mail, Github, Linkedin} from "./component/icon"
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Popup } from "./component/popups";
import { Timeline } from "./component/timeline";
import { useRef } from "react";
import { useLayoutEffect } from 'react';

//TUGAS BESOK!! adalah membuat ref untuk menyimpan posisi scroll

type AppProps = {
  portfolioSettings: PortfolioSettings;
  variant?: "default" | "outline";
  children?: React.ReactNode;
  className?: string;
// Optional prop to set scroll position
  posisi?: React.MutableRefObject<number>; // Optional prop to get scroll position
};


function App({ portfolioSettings, posisi }: AppProps) {


  //DeadLine
  const targetRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate();
  const [ShowPop, setShowPop] = React.useState(false);
  useEffect(() => {
    if (posisi) {
    window.scrollTo({ top: posisi.current, behavior: "auto" });
  }
  }, []);
  useEffect(() => {
    if (posisi) {
    window.scrollTo({ top: posisi.current, behavior: "auto" });
  }
  }, [ShowPop]);
  const handleHover = () => {
    if (posisi) {
      posisi.current = window.scrollY;
      console.log("Posisi scroll saat hover:", posisi.current);
    }
  };

  useLayoutEffect(() => {
      let efek = window.scrollY;
      console.log("Initial scroll position:", efek);
      if (posisi) {
        window.scrollTo({ top: posisi.current, behavior: "auto" });
      }
      if (efek = 0) {
        return () => {
        posisi && (posisi.current = window.scrollY); // Save scroll position on unmount
        console.log("Scroll position saved:", posisi?.current);
        };
      };
    }, []);

  const HandleGallery = () => {
    setShowPop(true);
    return ShowPop;
  };
  const scrollClick = () => {
    targetRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };
  const Handleclick = () => {
    console.log("Clicked");
  };
  const MhandleClick = () => {
    navigate("mindscape");
    console.log("Navigate");
  };
  const AppUtama = () => {
    return (
      <div className="min-h-screen w-full bg-black text-white">
      {/* SECTION 1 - Hero Banner */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40"></div>
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium">
              <span className="w-2 h-2 bg-cyan-400 rounded-full mr-2 animate-pulse"></span>
              Available for new projects
            </div>
            
            <div className="h-fit hover:scale-110 transition-transform duration-700 ease-out text-gradient-to-t from-black/60 via-transparent to-transparent">
              <img
                src={portfolioSettings.displayBannerImage}
                alt="Display Banner"
                className="w-full h-80 object-cover "
                onClick={scrollClick}
              />
            </div>

          </div>
        </div>
        
        {/* Enhanced Marquee Bar */}
        <div className="relative w-full bg-gradient-to-r from-black via-gray-900 to-black py-4 border-y border-gray-700/50 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-transparent to-cyan-500/5"></div>
          <div className="relative whitespace-nowrap animate-marquee text-gray-300 text-sm font-medium">
            <span className="inline-block px-8">🗝️"Mind is both prison and key."</span>
            <span className="inline-block px-8">⚡"Progress is swift, wisdom is slow."</span>
            <span className="inline-block px-8">🌐 "Code is the poetry of logic."</span>
            <span className="inline-block px-8">🕊️ "The canvas remembers what the heart forgets."</span>
            <span className="inline-block px-8">🪶 "Imagination is timeless ink."</span>
            <span className="inline-block px-8">🔮 "The self awakens when silence speaks."</span>
            <span className="inline-block px-8">🌹 "Beauty is truth made visible."</span>
            <span className="inline-block px-8">🌙 "Dreams are whispers of the soul."</span>
          </div>
        </div>
      </section>

      {/* Enhanced Gradient Divider */}
      <div className="relative w-full h-px overflow-visible bg-gradient-to-r from-white/0 via-white/20 to-white/0">
      </div>

      {/* SECTION 2 - Enhanced Hero Content */}
      <section id="hero-content-section" className="relative py-32 px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/40 via-black to-gray-900/40"></div>
        <div className="relative max-w-full mx-auto">
          <div className="grid lg:grid-cols-[70%_30%] items-center mx-32">
            {/* Enhanced Text Content */}
            <div className="space-y-10">
              <div className="space-y-8">
                <div className="space-y-4 flex-row justify-items-center ">
                  <h1 className="text-6xl lg:text-8xl font-inter-tight-variable font-bold tracking-tight bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent leading-tight">
                    {portfolioSettings.name}
                  </h1>
                  <p className="text-2xl lg:text-3xl text-gray-300 font-light leading-relaxed ">
                  {portfolioSettings.title}
                </p>
                <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                {portfolioSettings.description}
              </p>
                </div>
              </div>
              
              
              
              {/* Enhanced Button Group */}
              <div className="flex flex-col sm:flex-row gap-2 pt-0 justify-center items-center">
                <Button
                  onClick={MhandleClick}
                  variant="default"
                  size="lg"
                  className="h-12 bg-white z-10 border hover:bg-white/100 hover:border-white hover:text-black/20 font-bold rounded-sm shadow-lg hover:shadow-white/10 transition-all duration-300 transform hover:scale-105"
                >
                  <p  className="content inline-block px-0 py-0 ">Mindscape</p>
                </Button>
                {/*POP UP NANTI DIBUAT */}
                <Button
                  onClick={HandleGallery}
                  onMouseOver={handleHover}
                  variant="outline"
                  size="lg"
                  className="x"
                >
                  Gallery
                </Button>
                <a href={portfolioSettings.socialLinks.instagram} target="_blank" rel="noonpener noreferrer">
                <Button
                  onClick={Handleclick}
                  variant="outline"
                  size="lg"
                  className="x"
                >
                  Instagram
                </Button>
                </a>
                
                <a href={portfolioSettings.typeformLink} target="_blank" rel="noopener noreferrer">
                  <Button
                  onClick={Handleclick}
                  variant="outline"
                  size="lg"
                  className="x"
                >
               
                  Get In Touch
                </Button>
                </a>
              </div>
            </div>

            {/* Enhanced Profile Photo */}
            <div className="py-10 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute rounded-full blur-2xl opacity-20 scale-110"></div>
                <div className="relative w-fit h-fit lg:w-96 lg:h-96 md:w-52 md:h-52 sm:w-44 sm:h-44 rounded-full overflow-hidden shadow-2xl"
                  ref={targetRef}
                >
                  <FotoP />
                </div>
                
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Gradient Divider */}
      <div className="relative w-full h-px overflow-visible bg-gradient-to-r from-white/0 via-white/20 to-white/0">
      </div>

      {/* Enhanced About & Skills Section */}
      <section className="relative py-32 px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/30 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto space-y-24">
          
          {/* About Section */}
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                About Me
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto space-y-8">
              {portfolioSettings.aboutText.map((paragraph, index) => (
                <p key={index} className="text-xl text-gray-300 leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Contact Info Cards */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12">
              <div className="flex items-center gap-4 bg-gray-800/50 backdrop-blur-sm px-6 py-4 rounded-md border border-gray-700/50 hover:border-white/50 transition-all duration-300">
                <MapPin className="w-5 h-5 text-white" />
                <span className="text-gray-300 font-medium">{portfolioSettings.location}</span>
              </div>
              
              <div className="flex items-center gap-4 bg-gray-800/50 backdrop-blur-sm px-6 py-4 rounded-md border border-gray-700/50 hover:border-white/50 transition-all duration-300">
                <Mail className="w-5 h-5 text-white" />
                <span className="text-gray-300 font-medium">{portfolioSettings.email}</span>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="flex gap-4 justify-center pt-0">
              
              <Button
                onClick={Handleclick}
                size="icon"
                variant="ghost"
                className="w-14 h-14 bg-gray-800/50 hover:from-black border border-gray-700 hover:border-white/50 text-gray-400 hover:text-white transition-all duration-300 rounded-md"
                asChild
              >
                <a href={portfolioSettings.socialLinks.github} target="_blank" rel="noopener noreferrer">
                  <Github className="w-6 h-6" />
                </a>
              </Button>
              
              <Button
                onClick={Handleclick}
                size="icon"
                variant="ghost"
                className="w-14 h-14 bg-gray-800/50 border border-gray-700 hover:border-white/50 text-gray-400 hover:text-white transition-all duration-300 rounded-md"
                asChild
              >
                <a href={portfolioSettings.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-6 h-6" />
                </a>
              </Button>
              
              <Button
                onClick={Handleclick}
                size="icon"
                variant="ghost"
                className="w-14 h-14 bg-gray-800/50 hover:bg-gradient-to-r border border-gray-700 hover:border-white/50 text-gray-400 hover:text-white transition-all duration-300 rounded-md"
                asChild
              >
                <a href={`mailto:${portfolioSettings.socialLinks.email}`}>
                  <Mail className="w-6 h-6" />
                </a>
              </Button>
            </div>
          </div>

          {/* Enhanced Skills Section */}
          <div className="text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-inter-tight-variable font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Interest
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-md border border-gray-700/20 hover:border-white/30 transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <h4 className="text-xl font-semibold text-white">Frontend Development</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {portfolioSettings.skills.frontend.map((skill, index) => (
                      <div key={index} className="bg-gray-700/50 px-4 py-2 rounded-md text-gray-300 text-sm font-medium text-center transition-all duration-300">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-md border border-gray-700/50 hover:border-white/30 transition-all duration-300">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                   
                    <h4 className="text-xl font-semibold text-white">Backend Development</h4>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {portfolioSettings.skills.backend.map((skill, index) => (
                      <div key={index} className="bg-gray-700/50 px-4 py-2 rounded-md text-gray-300 text-sm font-medium text-center transition-all duration-300">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Gradient Divider */}
      <div className="relative w-full h-px overflow-visible bg-gradient-to-r from-white/0 via-white/20 to-white/0">
      </div>
      {/* Enhanced Projects Section */}
      <section className="relative py-32 px-6 lg:px-8">
        <div className=" max-w-7xl mx-auto align-middle items-center h-128">
          <div className="space-y-16 text-center justify-items-center items-center ">
            <div className="text-center space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Work Flow
              </h2>
              <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                What can I do?
              </p>
            </div>

            <Carousel
              opts={{
                align: "center",
                loop: true,
              }}
              className="w-1/6 md:w-1/12 items-center justify-items-center"
            >
              <CarouselContent className="-ml-4 md:-ml-6 justify-items-center h-full">
                {portfolioSettings.projects.map((project, index) => (
                  <CarouselItem key={index} className="pl-4 md:pl-6 basis-full justify-items-center">
                    <Card className=" h-full w-full group bg-gray-800/30 backdrop-blur-sm border-gray-700/50 hover:border-white/50 transition-all duration-500 rounded-md items-center">
                      <CardContent className="p-6 space-y-4 w-full h-full">
                        <div className="flex flex-col justify-between h-full">
                          <div className="relative space-y-3">
                            <h3 className=" text-lg font-semibold text-white line-clamp-2 transition-colors duration-300">
                              {project.title}
                            </h3>
                            <p className="text-sm text-gray-400 leading-relaxed line-clamp-3">
                              {project.description}
                            </p>
                            <p className="text-sm text-gray-500 leading-relaxed italic line-clamp-2">
                              "{project.descriptionIndo}"
                            </p>
                            <Timeline items={project.timeline}/>
                          </div>

                          <div>
                            <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-white/20 to-transparent mt-10 mb-5"></div>
                          <div className="relative flex flex-wrap gap-2 pt-2 justify-center">
                            {project.tech.slice(0, 3).map((tech, techIndex) => (
                              <span key={techIndex} className=" px-3 py-1 text-xs bg-gray-700/50 text-gray-300 rounded-full border border-gray-600/50 transition-all duration-300">
                                {tech}
                              </span>
                            ))}
                            {project.tech.length > 3 && (
                              <span className="px-3 py-1 text-xs rounded-full border">
                                +{project.tech.length - 3} more
                              </span>
                            )}
                          </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="w-12 h-12 transition-all duration-300 rounded-md border-0 hover:border-0 active:border-0" />
              <CarouselNext className="w-12 h-12 text-gray-400 transition-all duration-300 rounded-md border-0 hover:border-0 active:border-0" />
            </Carousel>
          </div>
        </div>
      
      </section>
      {/* Enhanced Gradient Divider */}
      <div className="relative w-full h-px overflow-visible bg-gradient-to-r from-white/0 via-white/20 to-white/0">
      </div>
      {/* Enhanced Contact Section */}
      <section className="relative py-32 px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-black/30"></div>
        <div className="relative max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <h2 className="z-10 h-20 text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
          </div>
          
          <p className="text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            {portfolioSettings.contactDescription}
          </p>
          
          <div className="pt-8">
            <a href={portfolioSettings.typeformLink} target="_blank" rel="noopener noreferrer">
              <Button
              variant="default"
              onClick={Handleclick}
              size="lg"
              className="bg-white z-10 border hover:bg-white/100 hover:border-white hover:text-black/20 text-black font-bold px-4 py-2 rounded-sm shadow-lg hover:shadow-white/10 transition-all duration-300 transform hover:scale-105"
            >
              Start a Conversation
            </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Enhanced Gradient Divider */}
      <div className="relative w-full h-px overflow-visible bg-gradient-to-r from-white/0 via-white/20 to-white/0">
      </div>

      {/* Enhanced Footer */}
      <footer className="relative py-16 px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-900/50 to-transparent"></div>
        <div className="relative max-w-6xl mx-auto text-center">
          <div className="space-y-6">
            <p className="text-gray-500 text-sm max-w-md mx-auto leading-relaxed">
              {portfolioSettings.footerText}
            </p>
          </div>
        </div>
      </footer>
    </div>
      
    )
  };
  return (
    <div className="App">
      {ShowPop ? <Popup className="overflow-y: auto; w-full" setShowPop={setShowPop} />  : <AppUtama  />}
    </div>
  );
}

export default App;

