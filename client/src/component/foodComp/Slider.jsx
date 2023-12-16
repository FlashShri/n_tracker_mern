
import React from 'react';
import { Carousel } from 'antd';
import  i1 from './pics/i1.jpg' ;
import  i2 from './pics/i2.jpg' ;
import  i3 from './pics/i3.jpg' ;
const contentStyle = {
  height: '450px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',

  margin : 30 ,
};


export function Slider(){
    return(
        <Carousel autoplay>
    <div>
      <h3 style={contentStyle}><img src={i1}></img></h3>
    </div>
  <div>
      <h3 style={contentStyle}><img src={i2}></img></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src={i3}></img></h3>
    </div>
    <div>
      <h3 style={contentStyle}><img src={i2}></img></h3>
    </div>
    {/* <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div> */}
  </Carousel>
    );
}