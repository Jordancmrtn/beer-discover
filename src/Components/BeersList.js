import React, { useContext, Fragment } from 'react';
import CtxBeers from './CtxBeers';
import './BeerList.css'
import Slideshow from './Slideshow';

const BeerList = () => {
  const beers = useContext(CtxBeers)

  return (
    <Fragment>
    <div className="beerList">
    {
      beers.map((beer, index)=>{
        return (<a href={`beers/${beer.id}`}><img key={index} src={beer.image_url} width="30" alt="{beer.name}"/></a>)
    })
    }
    </div>
    {/* <Slideshow /> */}
    <img className="img" src={process.env.PUBLIC_URL + '/images/bar4.png'} alt="" width="100%"/>
    <img className="imgMobile" src={process.env.PUBLIC_URL + '/images/test.png'} alt="" width="100%"/>
    </Fragment>
  )
}

export default BeerList;
