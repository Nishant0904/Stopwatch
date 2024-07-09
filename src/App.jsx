import { useState } from "react";
import "./App.css";
import Stopwatch from "./components/Stopwatch";
import "bootstrap/dist/css/bootstrap.min.css";
import Laps from "./components/Laps";
import LapHead from "./components/LapHead";
function App() {
  const [laps, setlaps] = useState([]);

  const handlenewlap = (counter, hr, min, sec, milli) => {
    const newlaps = [
      { counter: counter, hr: hr, min: min, sec: sec, milli: milli },
      ...laps,
    ];
    setlaps(newlaps);
  };
  return (
    <>
      <div>
        <Stopwatch onnewlap={handlenewlap} setlaps={setlaps} />
        {laps.length > 0 && <LapHead />}
        <Laps laps={laps} />
      </div>
    </>
  );
}

export default App;
