import React from 'react';
import './App.css';

import BackgroundVideo from './components/background-video/background-video.component';


import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
import SecondPage from './components/druga-strona/druga-strona.component';





function App() {
  return (
    <div>
      <div>
       <Parallax pages={2}>
          <ParallaxLayer offset={0} speed={0.2}>
            <BackgroundVideo/>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.5}>
            <SecondPage/>
          </ParallaxLayer>
        </Parallax>
      </div>
    </div>
  );
}

export default App;
