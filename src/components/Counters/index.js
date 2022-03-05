import React, { useState } from "react";

const Index = (props) => {
  const [Count, setCount] = useState(0);
  const Incriment = () => setCount(Count + 1);
  const Decriment = () => setCount(Count - 1);
  return (
    <div>
      <p>
        {props.value} = {Count}
      </p>
      <button onClick={Incriment}>+</button>
      <button onClick={Decriment}>-</button>
    </div>
  );
};

export default Index;
