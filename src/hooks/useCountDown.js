import { useEffect, useState } from "react";

const useCountdown = (targetMinute) => {
  const countDownSeconds = targetMinute * 60;

  const [countDown, setCountDown] = useState(countDownSeconds);

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown((countDown) => countDown - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownSeconds]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  // calculate time left
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [hours, minutes, seconds];
};

export { useCountdown };
