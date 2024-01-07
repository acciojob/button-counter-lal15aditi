
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [n, setCount] = useState(0);
  return (
    <div>
        {/* Do not remove the main div */}
        <p>Button clicked {n} times</p>
        <button onClick={()=> setCount(n+1)}>Click me</button>
    </div>
  )
}

export default App
