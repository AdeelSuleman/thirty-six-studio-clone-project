import { IoMoonSharp } from "react-icons/io5";
import { MdSunny } from "react-icons/md";
import "./DarkMode.css";
import React from "react";
import gsap from "gsap";

const DarkMode = () => {

    // Dark mode set karne k liye function
    const setDarkmode = () => {
        document.querySelector('body').setAttribute('data-theme', 'dark');
        localStorage.setItem('selectedTheme', 'dark');
        document.documentElement.style.setProperty('--background-color', 'black');
        document.documentElement.style.setProperty('--text-color', 'white');
    }

    // Light mode set karne k liye function 
    const setLightmode = () => {
        document.querySelector('body').setAttribute('data-theme', 'light');
        localStorage.setItem('selectedTheme', 'light');
        document.documentElement.style.setProperty('--background-color', 'white');
        document.documentElement.style.setProperty('--text-color', 'black');
    }

    // Page load hone pe check karo k pehle se koi theme set hai ya nahi
    React.useEffect(() => {
        const savedTheme = localStorage.getItem('selectedTheme');
        if(savedTheme === 'dark') {
            setDarkmode();
            document.getElementById('darkmode-toggle').checked = true;
        } else {
            setLightmode(); // Default light mode
        }
    }, []);

    // Theme toggle karne k liye function
    const toggleTheme = (e) => {
        const isRedMode = document.documentElement.style.getPropertyValue('--background-color') === '#FD2C2A';
        
        if (e.target.checked) {
            setDarkmode();
            if (isRedMode) {
                const growingSpan = document.querySelector('.growing');
                if (growingSpan) {
                    gsap.to(growingSpan, {
                        scale: 0,
                        duration: 1.2,
                        ease: "power2.inOut",
                    });
                }
                gsap.to('nav', {
                    backgroundColor: 'var(--background-color)',
                    duration: 1.5,
                    ease: "power2.inOut"
                });
            }
        } else {
            setLightmode();
        }
    }

    return (
        <div className='dark_mode flex items-center justify-center'>
            <input 
                className="dark_mode_input"
                type="checkbox"
                id="darkmode-toggle"
                onChange={toggleTheme}
            />
            <label className="dark_mode_label" htmlFor="darkmode-toggle">
                <MdSunny className="sun" />
                <IoMoonSharp className="moon " />
            </label>
        </div>
    )
}

export default DarkMode