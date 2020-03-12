import React from 'react';

import Background from '../../images/cosmos-background-1.jpg';
import PrzezroczystyText from '../info-kafelek/info-kafelek.component';
//import FadeExample from '../fade-text/fade-text.component';


var sectionStyle = {
  width: "100%",
  height: "100%",
  backgroundImage: `url(${Background})`
};

class SecondPage extends React.Component {
  render() {
    return (
      <div style={ sectionStyle }>
       <PrzezroczystyText/>
      </div>
    );
  }
}

export default SecondPage;