//1) import the BrowsersRouters to navigate in dom , React to navigate the react lib.

import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Feedbacks, Hero, Navbar, Tech, Works, StarsCanvas } from "./components";

const App = () => {
  return (
    //space for the background created by the canvas (outside-layer)
    <BrowserRouter>
      {/* space for the canvas: the background (inside layer),z-0 : defined the position of object in start point*/}
      {/* 1.)  <div> : for text space , 2.)z-0 : for started layout */}
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />

        <div className='relative z-0'>
          
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;