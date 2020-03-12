import React from 'react';

import './background-video.styles.css'
import Stars from '../../video/stars1080p.mp4'

import MenuContainer from '../menu-container/menu-container.component';
import {AnimatedText} from '../animated-text/animated-text.component';

const BackgroundVideo = () => {

   
        return (
            <div className='container'>
                    <video src={Stars} type='video/mp4' className='background-video' loop autoPlay muted/>
                    <div className='content'>
                    <div className='sub' >
                    
                    <AnimatedText
        textColor="#0033cc"
        overlayColor="#00cccc"
      >
        ADAM MOKROSZ
      </AnimatedText>
                    <MenuContainer/>
                </div>
            </div>
            </div>
        )
    
};

export default BackgroundVideo;