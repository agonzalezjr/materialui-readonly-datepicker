import React, { useState } from 'react';
import './App.css';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"

const App: React.FC = () => {

  const [readOnly, setReadOnly] = useState(false)
  const [date, setDate] = useState(new Date())
  const [isFocused, setFocus] = useState(false)

  const onBlur = () => setFocus(false)
  const onFocus = () => setFocus(true)

  const dateTimePicker = () => {
    if (readOnly) {
      return (<DateTimePicker
        disabled={false}
        error={false}
        InputProps={{
          disableUnderline: false,
          inputProps: {
            style: { textAlign: "left" }
          }
        }}
        onChange={(newDate) => setDate(newDate as Date)}
        onBlur={onBlur}
        onFocus={onFocus}
        value={date}
        open={false}
      />)
    }

    return (<DateTimePicker
      disabled={false}
      error={false}        
      InputProps={{
        disableUnderline: false,
        inputProps: {
          style: { textAlign: "left" }
        }
      }}
      onChange={(newDate) => setDate(newDate as Date)}
      onBlur={onBlur}
      onFocus={onFocus}
      value={date}
    />)
  }

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
      <h2>Am I in focus? {String(isFocused)}.</h2>
      <MuiPickersUtilsProvider utils={DateFnsUtils}>{dateTimePicker()}</MuiPickersUtilsProvider>
    </div>
  );
}

export default App;
