import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react"
import SplitType from "split-type";


const OurServices = () => {
    const textRef = useRef(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const text = new SplitType(textRef.current, { types: 'lines,chars,words' });
        const { lines, words, chars } = text;

        lines.forEach((line) => {
            const wrapper = document.createElement('div');
            wrapper.style.overflow = 'hidden';
            wrapper.style.display = 'block';
            line.parentNode.insertBefore(wrapper, line);
            wrapper.appendChild(line);
        });

        gsap.from(lines, {
            yPercent: 100,
            opacity: 0,
            duration: 1.5,
            delay: 1,
            ease: 'power2.out',
            stagger: 0.2,
            scrollTrigger:{
                trigger: textRef.current,
                start: 'top 90%',
                end: 'top 60%',
                scrub: 1,
                markers: false,
            },
        });

        gsap.from(words, {
            scale: 0.8,
            opacity: 0,
            duration: 1,
            delay: 1,
            ease: "back.out(1.7)",
            stagger: 0.05, // Slight delay between words
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 90%",
              end: "top 60%",
              scrub: 1,
              markers: false,
            },
          });

          gsap.from(chars, {
            y: 20,
            opacity: 0,
            duration: 0.5,
            delay: 1,
            ease: "power1.out",
            stagger: 0.02, // Delay between characters
            scrollTrigger: {
              trigger: textRef.current,
              start: "top 90%",
              end: "top 60%",
              scrub: 1,
              markers: false,
            },
          });
          
    }, []);

  return (
    <div className="xl:w-[850px] 3xl:w-[1000px] md:w-[80%] sm:w-[92%] mx-auto py-20">
      <h4 className="uppercase text-[18px] 3xl:text-[1.5rem] sm:text-[25px] xs:text-[22px]">Our services</h4>

      <div className="mt-20">
        <p ref={textRef} className="xl:text-[30px] lg:text-[24px] md:text-[20px] sm:text-[20px] xs:text-[18px] 3xl:text-[2rem] font-semibold font-[inherit]">
          We provide captivating design, interactive animations, <br />
          advanced usability, reliable code, and immaculate project <br />
          coordination. Whether you need a campaign built from<br />
          scratch or assistance at a specific phase, we&apos;ve got you covered.
        </p>
      </div>
    </div>
  )
}

export default OurServices