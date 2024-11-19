import gsap from "gsap";
import Canvas from "../components/Canvas";
import Navbar from "../components/Navbar";

import data from "../components/data";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";


const Home = () => {

    const [showCanvas, setShowCanvas] = useState(false);
    const headingRef = useRef(null);
    const growingSpan = useRef(null);
    const navbarRef = useRef(null);

    useEffect(() => {
        // const locomotiveScroll = new LocomotiveScroll();
        const scroll = new LocomotiveScroll();
        return () => scroll.destroy();
        
    }, []);

    useGSAP(() => {
        headingRef.current.addEventListener('click', (e) => {
            setShowCanvas(!showCanvas);
            if(!showCanvas) {
                gsap.set(growingSpan.current, {
                    top: e.clientY,
                    left: e.clientX,
                })
                gsap.to(growingSpan.current, {
                    scale: 1000,
                    duration: 1.2,
                    ease: "power2.inOut",
                });
                
                gsap.to('nav', {
                    backgroundColor: '#FD2C2A',
                    duration: 1.2,
                    ease: "power2.inOut"
                });

                // Set theme colors for red mode
                document.documentElement.style.setProperty('--background-color', '#FD2C2A');
                document.documentElement.style.setProperty('--text-color', 'black');
                
            } else {
                gsap.to(growingSpan.current, {
                    scale: 0,
                    opacity:-1,
                    duration: 1.2,
                    ease: "power2.out",
                });
                
                gsap.to('nav', {
                    backgroundColor: 'var(--background-color)',
                    duration: 1.5,
                    ease: "power2.inOut"
                });

                // Reset theme colors to saved theme
                const savedTheme = localStorage.getItem('selectedTheme') || 'light';
                if(savedTheme === 'dark') {
                    document.documentElement.style.setProperty('--background-color', 'black');
                    document.documentElement.style.setProperty('--text-color', 'white');
                } else {
                    document.documentElement.style.setProperty('--background-color', 'white'); 
                    document.documentElement.style.setProperty('--text-color', 'black');
                }
            }
        })
    }, [showCanvas]);

  return (
    <>
    <span ref={growingSpan} className="growing rounded-full fixed top-[-30px] left-[-30px] w-5 h-5 bg-[color:var(--body_background)]"></span>
    <div className='w-full relative  min-h-screen font-["Helvetica_Now_Display"]'>
        {showCanvas && data[0].map((item, index) => {
          return (
            <div key={index} className="mt-3">
              <Canvas detail={item} />
            </div>
          );
        })}
        
        <div className="w-full  h-screen ">
          <Navbar ref={navbarRef} />
          <div className="flex justify-between items-center relative w-[730px] mx-auto">
            <div className="w-[50%] h-full ">
                <h1 className="text-4xl  mt-[100px]">
                    At Thirtysixstudio, we build immersive digital experiences for brands with a purpose.
                </h1>
                <p className="mt-6 text-[18px] ">
                We&apos;re a boutique production studio focused on design, motion, and creative technology, constantly reimagining what digital craft can do for present-time ads and campaigns.
                </p>
                <p className="mt-6 text-[18px]">
                    scroll
                </p>
            </div>
            <div className="w-[50%] h-full ">
                <div className= "mt-[160px] ">
                <div className="w-[250px] h-[250px] relative z-0">
                  <p className="absolute top-6 left-[230px] w-[120px] h-[120px] animate-spin-slow" style={{
                    animation: 'spin 10s linear infinite', 
                    transformOrigin: 'center',
                    transform: 'rotate(0deg)'
                  }}>
                    <span className="absolute top-0 left-0 w-[120px] h-[120px]" style={{
                      transform: 'rotate(0deg)',
                      transformOrigin: 'center',
                    }}>
                      {'THIRTYSIXSTUDIO — FOR ALL THINGS DIGITAL PRODUCTION — '.split('').map((char, i) => (
                        <span
                          key={i}
                          className=""
                          style={{
                            position: 'absolute',
                            left: '50%',
                            top: '50%',
                            transform: `rotate(${i * (360 / 56)}deg) translateY(-100px)`,
                            transformOrigin: '0 0',
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
    <div className=' w-full relative min-h-screen font-["Helvetica_Now_Display"]'>
    {showCanvas && data[1].map((item, index) => {
          return (
            <div key={index} className="mt-3">
              <Canvas detail={item} />
            </div>
          );
        })}
    <div className=" mt-[-70px]">
            <div className="relative ">
              <h1 
                ref={headingRef}
                className="text-[15.9rem]  tracking-tight leading-none"
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
                  img.style.transform = `translate(${x - rect.width/2}px, ${y - rect.height/2}px)`;
                }}
              >
                Thirtysixstudio
              </h1>
                <div className={`absolute top-1/2 left-1/2 w-20 h-20 p-3 rounded-full opacity-0 transition-opacity duration-300 ${showCanvas ? 'bg-white' : 'bg-[#FD2C2A]'}`}>
                    <img 
                        src="https://thirtysixstudio.com/dist/pepper.529367f1.png" 
                        alt="Red Chili"
                        className="w-full h-full scale-125"
                        style={{transition: "transform 0.1s ease-in-out"}}
                    />
                </div>
            </div>
          </div>
          <div className="w-full border-t border-[var(--border-color)] mt-[100px]">
          <div className="h-screen  w-[850px] mx-auto pt-20 grid grid-cols-2">
            <div className=" pl-8">
              <h1 className="text-xl ">
                01 - WHAT WE DO
              </h1>
            </div>
            <div className="">
              <h1 className="text-[36px] leading-10">
              We aim to revolutionize digital production in the advertising space, bringing your ideas to life.
              </h1>
              <p className="text-[18px] mt-28">
              As a contemporary studio, we use cutting-edge design practices and the latest technologies to deliver seamless digital work.
              </p>
              <p className="text-[18px] mt-10">
              Our commitment to creativity, innovation, and simplicity, paired with our agile approach, ensures your journey with us is smooth and enjoyable from start to finish.
              </p>
            </div>
          </div>
          </div>
    </div>
    </>
  )
}

export default Home