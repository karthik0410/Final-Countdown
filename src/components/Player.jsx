import { useRef } from "react";
import { useState } from "react";

export default function Player() {
  const playerName = useRef();
  const [enteredPlayername, setEnteredPlayername] = useState("");

  function handleClick() {
    setEnteredPlayername(playerName.current.value);
    playerName.current.value = "";
  }
  return (
    <section id="player">
      <h2>Welcome {enteredPlayername ?? "unknown entity"}</h2>
      <p>
        <input ref={playerName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
