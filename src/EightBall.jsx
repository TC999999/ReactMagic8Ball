import "./EightBall.css";

const EightBall = ({ msg, color }) => {
  return (
    <div id="eight-ball" style={{ background: color }}>
      <b>{msg}</b>
    </div>
  );
};

export default EightBall;
