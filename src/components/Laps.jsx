import Lap from "./Lap";
const Laps = ({ laps }) => {
  return (
    <>
      <div className="laps-container">
        {laps.map((item) => (
          <Lap
            counter={item.counter}
            hr={item.hr}
            min={item.min}
            sec={item.sec}
            milli={item.milli}
          />
        ))}
      </div>
    </>
  );
};
export default Laps;
