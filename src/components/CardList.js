import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={robot[i].id}
              id={robots[i].id}
              name={robots[i].name}
              game={robots[i].game}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;