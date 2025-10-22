import gsap from "gsap";
import React from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
import { items } from "../Data";

const SpecailButtons = () => {
  const [activeIndex, setActiveIndex] = React.useState(null);

  
  return (
    <>
      {items.map((item, index) => {
        const isActive = activeIndex === index;

        return (
          <>
            <div
              key={index}
              className="border-b w-full pb-1 border-[var(--border-color-dark)]"
            >
              <button
                className=" w-full flex justify-center items-center py-4 xl:gap-[30%] transition-all duration-300"
                onClick={() => {
                  setActiveIndex(isActive ? null : index);
                  if (!isActive) {
                    gsap.fromTo(
                      `#design-content-${index}`,
                      {
                        height: 0,
                        opacity: 0,
                        y: -10,
                      },
                      {
                        height: "auto",
                        opacity: 1,
                        y: 0,
                        duration: 0.5,
                        ease: "power2.inOut",
                      }
                    );
                  } else {
                    gsap.to(`#design-content-${index}`, {
                      height: 0,
                      opacity: 0,
                      y: 100,
                      duration: 0.5,
                      ease: "power2.inOut",
                    });
                  }
                }}
              >
                <div className=" flex justify-between items-center xl:w-[800px] md:w-[80%] sm:w-[92%] xs:w-full xs:px-2 3xl:w-[1000px] mx-auto">
                <h1 className="text-[16px] 3xl:text-[1.5rem] ">{item.title}</h1>
                <p className="px-3 py-1 rounded-md">
                  <p
                    onMouseEnter={() => {
                      const audio = new Audio("../public/Audio/drum.mp3");
                      audio.volume = 0.5;
                      audio.play();
                    }}
                    className={`text-[12px] 3xl:text-[1.5rem] px-4 xl:mr-40 py-2 border-2 border-[var(--border-color)] hover:border-[var(--hover-border-color)] rounded-full transition-transform duration-300 ${
                      isActive
                        ? "bg-[var(--hover-bg-color)] text-[var(--hover-text-color)]"
                        : "bg-transparent"
                    }`}
                  >
                    {isActive ? <FaMinus /> : <FaPlus />}
                  </p>
                </p>
                </div>
              </button>
              <div
                id={`design-content-${index}`}
                className="design-content h-0 opacity-0 overflow-hidden"
              >
                {isActive && (
                  <>
                    {item.subObj.map((subItem, subIndex) => {
                      return (
                        <div
                          key={subIndex}
                          className=" w-full py-3 3xl:text-[1.5rem] border-t border-[var(--border-color)] hover:bg-[var(--hover-bg-color)] hover:text-[var(--hover-text-color)] "
                          onMouseEnter={() => {
                            const audio = new Audio(
                              "../public/Audio/clickButton.mp3"
                            );
                            audio.volume = 0.5;
                            audio.play();
                          }}
                        >
                          <h1 className=" hover:animate-pulse text-left w-full 3xl:w-[62%] xl:w-[50%] xs:px-6  md:w-[78%] sm:w-[90%] mx-auto">
                            {subItem.title}
                          </h1>
                        </div>
                      );
                    })}
                  </>
                )}
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default SpecailButtons;
