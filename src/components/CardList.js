import React from 'react';
import Card from './Card';

const CardList = ({ sketches }) => {
  return (
    <div>
      {
        sketches.map((user, i) => {
          return (
            <Card
              key={sketches[i].id}
              id={sketches[i].id}
              name={sketches[i].name}
              project={sketches[i].project}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;