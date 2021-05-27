import useCounter from "../Hooks/useCounter";

import Card from "./Card";

const ForwardCounter = () => {
  const counter = useCounter(true, 50);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
