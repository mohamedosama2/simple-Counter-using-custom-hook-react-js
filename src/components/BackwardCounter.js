import useCounter from "../Hooks/useCounter";

import Card from "./Card";

const BackwardCounter = () => {
  const counter = useCounter(false, 100);
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
