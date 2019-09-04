import React, { useState } from 'react';
import './App.css';

const App: React.FC = () => {

  const [readOnly, setReadOnly] = useState(false)

  return (
    <div>
      <input type="checkbox" id="scales" name="scales" checked={readOnly} onChange={() => setReadOnly(!readOnly)}/>
      <text>readOnly?</text>
      <h1>I am {readOnly ? "ReadOnly" : "Editable"}</h1>
    </div>
  );
}

export default App;
