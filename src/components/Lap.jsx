const Lap = ({ counter, hr, min, sec, milli }) => {
  return (
    <>
      <div className="flex justify-evenly align-middle">
        <div className="counter">{counter}</div>
        <div>
          {hr}:{min}:{sec}.{milli}
        </div>
      </div>
    </>
  );
};
export default Lap;
