import React, { useState } from 'react';
import './App.css';
import { Checkbox, FormControlLabel } from '@material-ui/core';

const App: React.FC = () => {

  const [readOnly, setReadOnly] = useState(false)

  return (
    <div>
      <FormControlLabel
        control={
          <Checkbox
            checked={readOnly}
            onChange={() => setReadOnly(!readOnly)}
          />}
        label="ReadOnly?"
      />
      <h1>Rendering as "{readOnly ? "ReadOnly" : "Editable"}"</h1>
    </div>
  );
}

export default App;
