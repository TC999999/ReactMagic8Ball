import { useState } from "react";
import messages from "./Message";
import "./App.css";
import EightBall from "./EightBall.jsx";
import ColorTally from "./ColorTally.jsx";

function App() {
  const [message, setMessage] = useState("Think of a question");
  const [color, setColor] = useState("black");
  const [greenTally, setGreenTally] = useState(0);
  const [goldTally, setGoldTally] = useState(0);
  const [redTally, setRedTally] = useState(0);

  const change8Ball = () => {
    const randMessageId = Math.floor(Math.random() * messages.length);
    const newMessage = messages[randMessageId];
    setMessage(newMessage.msg);
    setColor(newMessage.color);
    if (newMessage.color === "green") {
      setGreenTally(greenTally + 1);
    } else if (newMessage.color === "goldenrod") {
      setGoldTally(goldTally + 1);
    } else if (newMessage.color === "red") {
      setRedTally(redTally + 1);
    }
  };

  const reset = () => {
    setMessage("Think of a question");
    setColor("black");
    setGreenTally(0);
    setGoldTally(0);
    setRedTally(0);
  };

  return (
    <div id="App">
      <div id="eightBallDiv" onClick={change8Ball}>
        <EightBall msg={message} color={color} />
      </div>
      <button onClick={reset}>Reset 8-ball</button>
      <ColorTally color="green" tally={greenTally} />
      <ColorTally color="goldenrod" tally={goldTally} />
      <ColorTally color="red" tally={redTally} />
    </div>
  );
}

export default App;
