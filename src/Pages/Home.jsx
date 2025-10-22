import gsap from "gsap";
import Canvas from "../components/Canvas";
import Navbar from "../components/Navbar";
import "../index.css";
import data from "../components/data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import OurServices from "../components/OurServices";
import SpecailButtons from "../components/SpecailButtons";

const Home = () => {
  const [showCanvas, setShowCanvas] = useState(false);
  const headingRef = useRef(null);
  const mHeadingRef = useRef(null);
  const growingSpan = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    // const locomotiveScroll = new LocomotiveScroll();
    const scroll = new LocomotiveScroll();
    return () => scroll.destroy();
  }, []);

  useGSAP(() => {
    headingRef.current.addEventListener("click", (e) => {
      setShowCanvas(!showCanvas);
      if (!showCanvas) {
        gsap.set(growingSpan.current, {
          top: e.clientY,
          left: e.clientX,
        });
        gsap.to(growingSpan.current, {
          scale: 1000,
          duration: 1.2,
          ease: "power2.inOut",
        });

        gsap.to("nav", {
          backgroundColor: "#FD2C2A",
          duration: 1.2,
          ease: "power2.inOut",
        });

        // Set theme colors for red mode
        document.documentElement.style.setProperty(
          "--background-color",
          "#FD2C2A"
        );
        document.documentElement.style.setProperty("--text-color", "black");
      } else {
        gsap.to(growingSpan.current, {
          scale: 0,
          opacity: -1,
          duration: 1.2,
          ease: "power2.out",
        });

        gsap.to("nav", {
          backgroundColor: "var(--background-color)",
          duration: 1.5,
          ease: "power2.inOut",
        });

        // Reset theme colors to saved theme
        const savedTheme = localStorage.getItem("selectedTheme") || "light";
        if (savedTheme === "dark") {
          document.documentElement.style.setProperty(
            "--background-color",
            "black"
          );
          document.documentElement.style.setProperty("--text-color", "white");
        } else {
          document.documentElement.style.setProperty(
            "--background-color",
            "white"
          );
          document.documentElement.style.setProperty("--text-color", "black");
        }
      }
    });
    mHeadingRef.current.addEventListener("click", (e) => {
      setShowCanvas(!showCanvas);
      if (!showCanvas) {
        gsap.set(growingSpan.current, {
          top: e.clientY,
          left: e.clientX,
        });
        gsap.to(growingSpan.current, {
          scale: 1000,
          duration: 1.2,
          ease: "power2.inOut",
        });

        gsap.to("nav", {
          backgroundColor: "#FD2C2A",
          duration: 1.2,
          ease: "power2.inOut",
        });

        // Set theme colors for red mode
        document.documentElement.style.setProperty(
          "--background-color",
          "#FD2C2A"
        );
        document.documentElement.style.setProperty("--text-color", "black");
      } else {
        gsap.to(growingSpan.current, {
          scale: 0,
          opacity: -1,
          duration: 1.2,
          ease: "power2.out",
        });

        gsap.to("nav", {
          backgroundColor: "var(--background-color)",
          duration: 1.5,
          ease: "power2.inOut",
        });

        // Reset theme colors to saved theme
        const savedTheme = localStorage.getItem("selectedTheme") || "light";
        if (savedTheme === "dark") {
          document.documentElement.style.setProperty(
            "--background-color",
            "black"
          );
          document.documentElement.style.setProperty("--text-color", "white");
        } else {
          document.documentElement.style.setProperty(
            "--background-color",
            "white"
          );
          document.documentElement.style.setProperty("--text-color", "black");
        }
      }
    });
  }, [showCanvas]);

  return (
    <>
      <span
        ref={growingSpan}
        className="growing rounded-full fixed top-[-30px] left-[-30px] w-5 h-5 bg-[color:var(--body_background)]"
      ></span>
      <div className='2xl:w-[1530px] 2xl:h-[100vh] 3xl:w-[1530px] 3xl:h-[70vh] xl:w-full xl:h-[100vh] lg:w-full lg:h-[100vh] md:w-full md:h-[100vh]  mx-auto relative font-["Helvetica_Now_Display"]'>
        {showCanvas &&
          data[0].map((item, index) => {
            return (
              <div key={index} className="mt-3">
                <Canvas detail={item} />
              </div>
            );
          })}

        <div className="md:w-full md:h-screen ">
          <Navbar ref={navbarRef} />
          <div className="grid xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 justify-between items-center xs:px-2 relative 3xl:w-[1000px] 2xl:w-[900px] xl:w-[730px] md:w-[80%] sm:w-[92%] mx-auto">
            {/* Text side div */}
            <div className="md:h-full ">
              <h1 className="xl:text-4xl 3xl:text-[3rem] lg:text-2xl font-semibold  md:text-[26px]  sm:text-[35px] xs:text-[30px] mt-[100px] 3xl:leading-[3.5rem] ">
                At Thirtysixstudio, we build immersive digital experiences for
                brands with a purpose.
              </h1>
              <p className="mt-6 xl:text-[18px] 3xl:text-[1.5rem] lg:text-normal sm:text-[20px] sm:mt-10 xs:mt-8 xs:text-[18px]">
                We&apos;re a boutique production studio focused on design,
                motion, and creative technology, constantly reimagining what
                digital craft can do for present-time ads and campaigns.
              </p>
              <p className="mt-6 text-[20px]">scroll</p>
            </div>
            {/* Spin side div */}
            <div className="">
              <div className="md:mt-[160px] sm:mt-20 ">
                <div className="md:w-[250px] md:h-[250px] sm:w-full sm:h-[400px] xs:w-full xs:h-[400px] relative z-0">
                  <p
                    className="absolute top-6 xl:left-[230px] lg:left-[35%] md:left-[30%] sm:left-[40%] sm:top-20 xs:left-[30%] xs:top-32 w-[120px] h-[120px] animate-spin-slow"
                    style={{
                      animation: "spin 10s linear infinite",
                      transformOrigin: "center",
                      transform: "rotate(0deg)",
                    }}
                  >
                    <span
                      className="absolute top-0 left-0 w-[120px] h-[120px]"
                      style={{
                        transform: "rotate(0deg)",
                        transformOrigin: "center",
                      }}
                    >
                      {"THIRTYSIXSTUDIO — FOR ALL THINGS DIGITAL PRODUCTION — "
                        .split("")
                        .map((char, i) => (
                          <span
                            key={i}
                            className=""
                            style={{
                              position: "absolute",
                              left: "50%",
                              top: "50%",
                              transform: `rotate(${
                                i * (360 / 56)
                              }deg) translateY(-100px)`,
                              transformOrigin: "0 0",
                            }}
                          >
                            {char}
                          </span>
                        ))}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=' 2xl:w-[1530px] xs:px-2  3xl:w-[1530px] 3xl:min-h-[100vh] 2xl:min-h-fit xl:min-h-screen mx-auto w-full relative  '>
        {showCanvas &&
          data[1].map((item, index) => {
            return (
              <div key={index} className="mt-3">
                <Canvas detail={item} />
              </div>
            );
          })}

          {/* desktop & tablet version start */}
        <div className=" hidden md:inline">
          <div className=" mt-[-70px] 3xl:mt-[-5%] md:mt-0 relative">
            <h1
              ref={headingRef}
              className="xl:text-[15.9rem] lg:text-[10rem] md:text-[8rem] tracking-tight leading-none"
              onMouseEnter={(e) => {
                const img = e.currentTarget.nextElementSibling;
                img.style.opacity = "1";
              }}
              onMouseLeave={(e) => {
                const img = e.currentTarget.nextElementSibling;
                img.style.opacity = "0";
              }}
              onMouseMove={(e) => {
                const img = e.currentTarget.nextElementSibling;
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                img.style.transform = `translate(${x - rect.width / 2}px, ${
                  y - rect.height / 2
                }px)`;
              }}
            >
              Thirtysixstudio
            </h1>
            <div
              className={`absolute top-1/2 left-1/2 w-20 h-20 p-3 rounded-full opacity-0 transition-opacity duration-300 ${
                showCanvas ? "bg-white" : "bg-[#FD2C2A]"
              }`}
            >
              <img
                src="https://thirtysixstudio.com/dist/pepper.529367f1.png"
                alt="Red Chili"
                className="w-full h-full scale-125"
                style={{ transition: "transform 0.1s ease-in-out" }}
              />
            </div>
          </div>
        </div>
         {/* desktop & tablet version End */}
         {/* Mobile version start */}
         <div className="mt-[-70px] 3xl:mt-[-5%]  md:hidden">
          <div className=" ">
          <h1
              ref={mHeadingRef}
              className="xl:text-[15.9rem] lg:text-[10rem] md:text-[8rem] sm:text-[11rem] xs:text-[7rem] tracking-tight leading-none"
            >
              <span className="">
                Thirty 
              </span> <br className=""/>
              <span className="relative">
                six 
              </span>
              <div
              className={`absolute md:top-1/2 md:left-1/2 sm:top-[15rem] sm:left-[14rem] xs:top-[9rem] left-[10rem] w-20 h-20 p-3 rounded-full opacity-100 transition-opacity duration-300 ${
                showCanvas ? "bg-white" : "bg-[#FD2C2A]"
              }`}
            >
              <img
                src="https://thirtysixstudio.com/dist/pepper.529367f1.png"
                alt="Red Chili"
                className="w-full h-full scale-125"
                style={{ transition: "transform 0.1s ease-in-out" }}
              />
            </div>
              <br/>
              <span className="">
                studio 
              </span>
            </h1>
          </div>
         </div>
         {/* Mobile version End */}

        <div className="w-full 3xl:w-[1530px] mx-auto border-t border-[var(--border-color)] md:mt-[100px] sm:mt-3 xs:mt-10">
          <div className=" xl:w-[850px] 3xl:w-[1000px] 3xl:h-fit mx-auto pt-20 grid md:grid-cols-2 md:w-[85%] sm:w-[92%]">
            <div className=" md:pl-8">
              <h1 className="xl:text-xl 3xl:text-[2rem]  lg:text-lg md:text-[20px] sm:text-[25px] xs:text-[22px]">01 - WHAT WE DO</h1>
            </div>
            <div className="">
              <h1 className="xl:text-[36px] 3xl:text-[2.5rem] lg:text-[1.5rem] md:text-[20px] sm:text-[32px] sm:font-semibold sm:mt-10 xs:font-semibold xs:text-[24px] xs:mt-10 md:mt-0 sm:leading-normal xl:text-xl 3xl:leading-[3rem]">
                We aim to revolutionize digital production in the advertising
                space, bringing your ideas to life.
              </h1>
              <p className="xl:text-[18px] 3xl:text-[1.5rem] xl:text-xl md:text-[16px] sm:text-[20px] sm:mt-16 xs:mt-10 xs:text-[18px] md:mt-5 xl:mt-28 lg:mt-10 3xl:mt-14 2xl:mt-10">
                As a contemporary studio, we use cutting-edge design practices
                and the latest technologies to deliver seamless digital work.
              </p>
              <p className="xl:text-[18px] 3xl:text-[1.5rem] xl:text-xl md:text-[16px] sm:text-[20px] sm:mt-10 xs:mt-10 xs:text-[18px] md:mt-5 xl:mt-10 lg:mt-5">
                Our commitment to creativity, innovation, and simplicity, paired
                with our agile approach, ensures your journey with us is smooth
                and enjoyable from start to finish.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full relative  2xl:w-[1530px] 2xl:min-h-fit 3xl:w-[1530px] 3xl:min-h-fit 3xl:pb-32 xs:px-2 mx-auto">
        {showCanvas &&
          data[2].map((item, index) => {
            return (
              <div key={index} className="mt-3">
                <Canvas detail={item} />
              </div>
            );
          })}
        <div className="w-full border-t border-b border-[var(--border-color)] mt-[100px]">
          <OurServices />
        </div>
      </div>
      <div className=" w-full relative 2xl:w-[1530px] 2xl:min-h-[100vh] 3xl:w-[1530px] 3xl:min-h-fit mx-auto xs:px-2">
        {showCanvas &&
          data[3].map((item, index) => {
            return (
              <div key={index} className="mt-3">
                <Canvas detail={item} />
              </div>
            );
          })}
        <div className="w-full ">
          <SpecailButtons />

          <div className="xl:w-[800px] 3xl:w-[1000px] md:w-[80%] sm:w-[92%] mx-auto pb-20">
            <p className="xl:w-2/5 md:w-[400px] 3xl:mt-24 2xl:mt-16 xl:mt-32 lg:mt-20 md:mt-14 sm:mt-14 3xl:text-[1.5rem] xl:text-normal sm:text-[20px] xs:text-[18px] xs:mt-10">
              Got a project in mind? Drop us a line at adeelsuleman29@gmail.com
              or use the form below.
            </p>
            <p className="xl:w-2/5 xl:mt-10 md:w-[400px] lg:mt-5 md:mt-6 sm:mt-6 3xl:text-[1.5rem] xl:text-normal sm:text-[20px] xs:text-[18px] xs:mt-10">
              Not sure what you need? We’re here to help you define the
              undefined. Let’s explore all creative and technical possibilities
              together through one of our tailored labs, where we champion
              future-forward thinking within an ethical framework.
            </p>
            <button
              
             className="relative 3xl:text-[1.5rem] mt-10 px-14 py-2 border border-[var(--border-color)] rounded-full text-[var(--border-color)] font-semibold overflow-hidden group">
              <span className="absolute inset-0 rounded-full bg-[var(--hover-bg-color)] scale-0  transition-transform duration-500 ease-in-out group-hover:scale-100"></span>
              <span className="relative text-[var(--text-color)] group-hover:text-[var(--hover-text-color)] transition-colors duration-500 z-0">
                <u>
                Talk to us
                </u>
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;