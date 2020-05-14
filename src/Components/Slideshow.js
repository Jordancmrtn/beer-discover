import React, { useContext } from 'react';
import { Slide } from 'react-slideshow-image';
import CtxBeers from './CtxBeers';
import './Slideshow.css';
 
const slideImages = [];
 
const properties = {
  duration: 2000,
  transitionDuration: 200,
  infinite: true,
  indicators: false,
  arrows: false,
  onChange: (oldIndex, newIndex) => {
    console.log(`slide transition from ${oldIndex} to ${newIndex}`);
  }
}

 

// const handleCard = (beer) => {
//   window.location.href={`beers/${beer.id}`}
// };

const Slideshow = () => {

  const beers = useContext(CtxBeers)

  const pushArray = beers.map((beer, index)=>{return beer.image_url})

  slideImages.splice(0, 0,pushArray)

    return (
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div style={{'backgroundImage': `url(${slideImages[0][1]})`}}></div>
          </div>
          <div className="each-slide">
            <div  style={{'backgroundImage': `url(${slideImages[0][3]})`}}></div>
          </div>
          <div className="each-slide">
            <div  style={{'backgroundImage': `url(${slideImages[0][4]})`}}></div>
          </div>
          <div className="each-slide">
            <div  style={{'backgroundImage': `url(${slideImages[0][5]})`}}></div>
          </div>
          <div className="each-slide">
            <div  style={{'backgroundImage': `url(${slideImages[0][6]})`}}></div>
          </div>
          <div className="each-slide">
            <div  style={{'backgroundImage': `url(${slideImages[0][7]})`}}></div>
          </div>
          <div className="each-slide">
            <div  style={{'backgroundImage': `url(${slideImages[0][8]})`}}></div>
          </div>
          <div className="each-slide">
            <div  style={{'backgroundImage': `url(${slideImages[0][9]})`}}></div>
          </div>
        </Slide>
      </div>
    )
}

export default Slideshow;