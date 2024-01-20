import { useState } from "react";

function App() {
  const [input, setInput] = useState(0);
  const [divisor, setDivisor] = useState();
  let value = 0;
  let answer = "";

  const handleSubmit = (e) => {
    e.preventDefault();
    for (let i = 1; i <= input; i++) {
      if (input % i === 0) {
        value += 1;
      }
    }
    setDivisor(value);
    value = 0;
  };

  if (divisor === 2) {
    answer = "Prime";
  } else if (divisor > 2) {
    answer = "Composite";
  } else if (divisor === 1) {
    answer = "Neither Prime nor Composite";
  } else if (divisor <= 0) {
    answer = "Please input a Natural number";
  }
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  return (
    <>
      <h1>Prime or Composite Checker</h1>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={handleChange} />
        <br />
        <button type="submit">Submit</button>
      </form>
      <h2>{answer}</h2>
    </>
  );
}

export default App;
