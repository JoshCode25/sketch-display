import React from 'react';

const Card = ({ name, project }) => {
  return (
    <div className='tc grow bg-light-green br3 pa3 ma2 dib bw2 shadow-5'>
      <img 
        className='project-image'
        alt={`img - ${name}`} 
        src={`https://res.cloudinary.com/joshcode25/image/upload/v1/${project}/${name}.png`}
      /> 
      <div>
        <h2>{name}</h2>
        <p>{project}</p>
      </div>
    </div>
  );
}

export default Card;
