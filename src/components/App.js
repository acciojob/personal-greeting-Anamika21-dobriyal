import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  // Declare a state to store the user's name
  const [name, setName] = useState('');

  // Handle input change
  const handleInputChange = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Personalized Greeting</h1>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={handleInputChange}
        />
        {name && <p>Hello, {name}!</p>}
    </div>
  )
}

export default App;

