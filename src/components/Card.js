import React from 'react';

const Card = ({ name, game, id }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img alt='robots' src={`https://res.cloudinary.com/joshcode25/image/upload/${game}/${name}.png`} />
      <div>
        <h2>{name}</h2>
        <p>{game}</p>
      </div>
    </div>
  );
}

export default Card;
