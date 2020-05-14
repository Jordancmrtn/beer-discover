import React, { useContext, Fragment } from 'react';
import CtxBeers from './CtxBeers';
import { useParams } from 'react-router-dom';
import './Beer.css'


const Beer = () => {
  const beer = useContext(CtxBeers);
  const beerId = useParams().id;

  return (
    <Fragment>
      <div className="card">
        
        {beer.filter(beer => beer.id === parseInt(beerId)).map((beer, index) => {
          return(
            <Fragment>
              <img src={beer.image_url} alt="{beer.name}"/>
              <div key={index}>
                <h1>{beer.name}</h1>
                <p>{beer.description}</p>
                <a href="/" class="myButton">Return</a>
              </div>
            </Fragment>
          )
        })}
        
      </div>
      <img className="img2" src={process.env.PUBLIC_URL + '/images/bar4.png'} alt=""/>
    </Fragment>

  )
}

export default Beer;