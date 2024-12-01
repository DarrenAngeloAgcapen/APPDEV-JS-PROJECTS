import { useState } from "react";

const Developer = () => {
  const [vouchPoints, setVouchPoints] = useState(0);

  return (
    <div>
      <h1>Developer Profile</h1>
      <p>Name: Agcapen, Darren Angelo</p>
      <button onClick={() => setVouchPoints(vouchPoints + 1)}>Vouch</button>
      <p>Vouch Points: {vouchPoints}</p>
    </div>
  );
};

export default Developer;
