import { useState } from "react";
const Stopwatch = ({ onnewlap, setlaps }) => {
  const [time, setTime] = useState({
    hr: String(0).padStart(2, "0"),
    min: String(0).padStart(2, "0"),
    sec: String(0).padStart(2, "0"),
    milli: String(0).padStart(2, "0"),
  });
  const [status, setStatus] = useState();
  const [counter, setcounter] = useState(1);
  const [flag, setflag] = useState(true);
  const [curr, setcurr] = useState("Start");

  let updHr = time.hr;
  let updMin = time.min;
  let updSec = time.sec;
  let updMilli = time.milli;

  const start = () => {
    if (flag) {
      myFun();
      setStatus(setInterval(myFun, 10));
      setcurr("Stop");
    } else {
      clearInterval(status);
      setcurr("Start");
    }
    const f = !flag;
    setflag(f);
  };

  const reset = () => {
    clearInterval(status);
    setcurr("Start");
    setflag(true);
    setlaps([]);
    setcounter(1);
    setTime({
      hr: String(0).padStart(2, "0"),
      min: String(0).padStart(2, "0"),
      sec: String(0).padStart(2, "0"),
      milli: String(0).padStart(2, "0"),
    });
  };

  const handlelapbutton = () => {
    setcounter(counter + 1);
    onnewlap(counter, time.hr, time.min, time.sec, time.milli);
  };
  const myFun = () => {
    if (updMilli === 99) {
      updMilli = 0;
      updSec++;
    }
    if (updSec === 60) {
      updSec = 0;
      updMin++;
    }
    if (updMin === 60) {
      updMin = 0;
      updHr++;
    }
    updMilli++;
    setTime({
      hr: String(updHr).padStart(2, "0"),
      min: String(updMin).padStart(2, "0"),
      sec: String(updSec).padStart(2, "0"),
      milli: String(updMilli).padStart(2, "0"),
    });
  };

  return (
    <>
      <div className="container2 mx-auto flex justify-center flex-col items-center">
        <div className="display flex justify-center align-middle">
          <div>
            <h1>{time.hr + " : " + time.min + " : " + time.sec + " . "}</h1>
          </div>
          <div className="milli">
            <h1 className="m-disp">{time.milli}</h1>
          </div>
        </div>

        <div className="buttons">
          <button type="button" className="btn btn-primary" onClick={start}>
            {curr}
          </button>
          <button type="button" className="btn btn-danger" onClick={reset}>
            Reset
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={handlelapbutton}
          >
            Lap
          </button>
        </div>
      </div>
    </>
  );
};

export default Stopwatch;
