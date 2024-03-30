import {useState} from "react";

export function Clock() {
  const [currentDate, setDate] = useState(new Date());


  setInterval(() => {
    setDate(new Date());
  }, 1000);

  return (
    <>
      <h1>Clock</h1>
      <h2>{currentDate.toLocaleTimeString()}</h2>
    </>
  )
}
