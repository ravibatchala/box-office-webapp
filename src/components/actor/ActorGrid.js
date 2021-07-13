import React from 'react';
import ActorCard from './ActorCard';

import IMG_NOT_FOUNT from '../../images/not-found.png';
import { FlexGrid } from '../styled';

const ActorGrid = ({ data }) => {
  return (
    <FlexGrid>
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
    </FlexGrid>
  );
};

export default ActorGrid;
