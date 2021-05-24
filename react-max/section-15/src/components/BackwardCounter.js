import useCounter from '../hooks/useCounter';

import Card from './Card';

const BackwardCounter = () => {
  return <Card>{useCounter()}</Card>;
};

export default BackwardCounter;