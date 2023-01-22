import { useState, useEffect } from "react";

export const Clock = () => {
  const [date, setDate] = useState<any>(new Date());

  /* useEffect(() => {
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => setDate(timerId);
  }); */

  return <div></div>;
};
