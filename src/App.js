import { useState, useEffect } from "react";
import "./App.css";
import Timepicker from "./TimeField";
import TimeMeasurementSelect from './TimeMeasurementSelect';
function App() {
  const [fromTime, setFromTime] = useState();
  const [toTime, setToTime] = useState();
  const [differenceInTime, setDifferenceInTime] = useState();
  const [timeMeasurement, setTimeMeasurement]  = useState("days");
  const timeMeasurementMultiplier = {
    seconds:(1000*60),
    hours:(1000*60*60),
    days:(1000*60*60*24),
    weeks:(1000*60*60*24*7),
    months:(1000*60*60*24*30),
    Years:(1000*60*60*24*365)
  }
  useEffect(() => {
    getTimeDifference();
  });

  function getTimeDifference() {
    if (fromTime && toTime) {
      let fromDate = new Date(fromTime);
      let toDate = new Date(toTime);
      let difference = toDate.getTime() - fromDate.getTime() 
      let timeDifference = difference/timeMeasurementMultiplier[timeMeasurement]
      setDifferenceInTime(timeDifference);
    } else {
      setDifferenceInTime(fromTime ? fromTime : toTime ? toTime : "");
    }
  }

  function evaluateTheMesurement(){
    
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Time Between App</h1>

        <Timepicker value="From: " onChange={(time) => setFromTime(time)} />

        <Timepicker value="To: " onChange={(time) => setToTime(time)} />

        <TimeMeasurementSelect value = {timeMeasurement} onChange = {setTimeMeasurement}/>
        <div>{differenceInTime}</div>
      </header>
    </div>
  );
}

export default App;
