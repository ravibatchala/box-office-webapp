import React from 'react';
import ActorCard from './ActorCard';

import IMG_NOT_FOUNT from '../../images/not-found.png';

const ActorGrid = ({ data }) => {
  return (
    <div>
      {data.map(({ person }) => (
        <ActorCard
          key={person.id}
          name={person.name}
          country={person.county ? person.country.name : null}
          birthday={person.birthday}
          deathday={person.deathday}
          gender={person.gender}
          image={person.image ? person.image.medium : IMG_NOT_FOUNT}
        />
      ))}
    </div>
  );
};

export default ActorGrid;
