import "./ColorTally.css";

const ColorTally = ({ color, tally }) => {
  return (
    <div className="tally-marker" style={{ color: color }}>
      <b>
        {color.toUpperCase()}: {tally}
      </b>
    </div>
  );
};

export default ColorTally;
