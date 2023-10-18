import React from 'react';
import { Spinner } from '@chakra-ui/react';

type Props = {};

const Fallback: React.FC<Props> = props => {
  return (
    <div className="app__flex h-screen w-full bg-primary">
      <Spinner />
    </div>
  );
};

export default Fallback;
