import { useEffect, useState } from "react";

const useCounter = (counterType = true, initialValue = 0) => {
  const [counter, setCounter] = useState(initialValue);

  useEffect(() => {
    const interval = setInterval(() => {
      if (counterType) setCounter((prevCounter) => prevCounter + 1);
      else setCounter((prevCounter) => prevCounter - 1);
    }, 100);

    return () => clearInterval(interval);
  }, [counterType, initialValue]);
  return counter;
};
export default useCounter;
