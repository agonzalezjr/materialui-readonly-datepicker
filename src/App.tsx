import React, { useState, Fragment } from 'react';
import './App.css';
import { Checkbox, FormControlLabel } from '@material-ui/core';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers"
import DateFnsUtils from "@date-io/date-fns"

const App: React.FC = () => {

  const [readOnly, setReadOnly] = useState(false)
  const [date, setDate] = useState(new Date())

  const dateTimePicker = () => {
    if (readOnly) {
      return (<DateTimePicker
        onChange={(newDate) => setDate(newDate as Date)}
        value={date}
        open={false}
      />)
    }

    return (<DateTimePicker
      onChange={(newDate) => setDate(newDate as Date)}
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

      {/* This will crash it! */}
      <MuiPickersUtilsProvider utils={DateFnsUtils}>{dateTimePicker()}</MuiPickersUtilsProvider>

      {/* This doesn't crash */}
      {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <Fragment>
          {readOnly && <DateTimePicker
            onChange={(newDate) => setDate(newDate as Date)}
            value={date}
            open={false}
          />}
          {!readOnly && <DateTimePicker
            onChange={(newDate) => setDate(newDate as Date)}
            value={date}
          />}
        </Fragment>
      </MuiPickersUtilsProvider> */}
    </div>
  );
}

export default App;
