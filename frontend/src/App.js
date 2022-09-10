import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("default");
  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((res) => res.json())
      .then((data) => setText(data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hi There, <strong> {text}.</strong>
        </p>
      </header>
    </div>
  );
}

export default App;
