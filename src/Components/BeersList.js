import React, { useContext } from 'react';
import CtxBeers from './CtxBeers';
import './BeerList.css'
import Slideshow from './Slideshow';

const BeerList = () => {
  const beers = useContext(CtxBeers)

  return (
    <>
      <img id="logoFestival" src={process.env.PUBLIC_URL + '/images/FestivalBieres.png'} alt=""/>
      <div className="beerList">
      {
        beers.map((beer, index)=>{
          return (<a href={`beers/${beer.id}`}><img key={index} src={beer.image_url} width="30" alt="{beer.name}"/></a>)
      })
      }
      </div>
      {/* <Slideshow /> */}
      <img className="imgMobile" src={process.env.PUBLIC_URL + '/images/test.png'} alt="" width="100%"/>
    </>
  )
}

export default BeerList;
