

import "./index.css";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";


function App() {
  // useEffect(() => {
  //   const locomotiveScroll = new LocomotiveScroll();
  // }, []);
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
      {/* <div className="w-full relative min-h-screen font-['Helvetica_Now_Display']">
        {data[0].map((item, index) => {
          return (
            <div key={index}>
              <Canvas detail={item} />
            </div>
          );
        })}
        
      </div> */}
      {/* <div className="w-full relative min-h-screen ">
        {data[1].map((item, index) => {
          return (
            <div key={index}>
              <Canvas detail={item} />
            </div>
          );
        })}
      </div> */}
    </>
  );
}

export default App;
