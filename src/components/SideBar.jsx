import { IoCloseOutline } from "react-icons/io5";
import PropTypes from "prop-types";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { NavLink } from "react-router-dom";

export default function SideBar({ onClose, visible }) {
  const navRef = useRef(null);
  const ulRef = useRef(null);


  const closeSidebar = () => {
    // Animate closing
    gsap.to(navRef.current, {
      y: "100%",
      opacity: 0,
      duration: 1,
      ease: "power3.in",
      onComplete: () => {
        // Call onClose after animation completes
        onClose();
      },
    });
  };

  useEffect(() => {
    if (visible) {
      // Animate sidebar opening
      gsap.fromTo(
        navRef.current,
        { y: "100%", opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      );

      // Animate list items
      if (ulRef.current) {
        gsap.fromTo(
          ulRef.current.children,
          { opacity: 0, y: 20 },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power3.out",
            stagger: 0.5, 
          }
        );
      }
    }
  }, [visible]);

  if (!visible) return null;

  SideBar.propTypes = {
    onClose: PropTypes.func.isRequired,
    visible: PropTypes.bool.isRequired,
  };

  return (
    <div>
      <nav
        ref={navRef}
        className="fixed inset-0 ml-auto py-6 px-5 z-50 transform lg:hidden text-whiteColor bg-[color:var(--background-color)] text-[color:var(--text-color)]"
      >
        <div className="w-full h-20 relative z-50">

          {/* Close button with animation */}
          <div className="p-1 absolute right-0 top-0 rounded-full border border-gray-400">
            <IoCloseOutline
                className="text-[1rem]  text-gray-400"
                onClick={closeSidebar}
            />
          </div>
        </div>
        {/* Menu with animation */}
        <div className=" mt-24">
            <ul ref={ulRef} className="">
                {['What we do', 'Who we are','How we give me back','Talk to us'].map((menuLinks,index) => {
                    return(
                        <li key={index} className="my-3">
                            <NavLink to={`#${menuLinks.toLowerCase().replace(/\s+/g, "-")}`} className="text-[1.5rem]">
                                {menuLinks}
                            </NavLink>
                        </li>
                    )
                })}
            </ul>
        </div>
      </nav>
    </div>
  );
}
