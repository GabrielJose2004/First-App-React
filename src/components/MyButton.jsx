import { useState } from "react";

function MyButton() {
  const [count, setCount] = useState(0);

  function clicou() {
    setCount(count + 1);
  }

  return (
    <>
      <button onClick={clicou}>
        I am a Button - Numero de cliques {count}
      </button>
    </>
  );
}

export default MyButton;
