import { useState, useEffect } from "react";
import "./App.css";
import Timepicker from "./TimeField";
import TimeMeasurementSelect from "./TimeMeasurementSelect";
import Options from "./OptionsComponent/Options";
import CustomTimeMeassurement from "./customMessurement"
import utilities from './utilities'

function App() {
  const [fromTime, setFromTime] = useState();
  const [toTime, setToTime] = useState();
  const [differenceInTime, setDifferenceInTime] = useState();
  const [timeMeasurement, setTimeMeasurement] = useState("days");
  const [takeEndDate, setTakeEndDate] = useState(false);
  const [customMessuaremetActive, setCustomMessuaremetActive] = useState(false);
  const [customUnitObject, setCustomUnitObject] = useState({value:0,unit:"Sample"});

  //represent days of week being 0 Sun and 6 Sat
  const [daysToCount, setDaysToCount] = useState([0, 1, 2, 3, 4, 5, 6]);


  useEffect(() => {
    calculateTimeDifference();
  });

  

  function calculateTimeDifference() {
    if (fromTime && toTime) {
      let difference = utilities.getTimeDifferenceOfDateStringInMiliseconds({fromTime:fromTime,toTime:toTime, takeEndDate:takeEndDate}, utilities.oneDayTimeIMilinSeconds)
      let finalTimeDifference;

      let timeDifferenceInDays =
          difference / utilities.timeMeasurementMultiplier["days"];
        let timeWithOnlyCountDays = utilities.subtractDaysThatDontCount(
        (new Date(fromTime).getDay()),
          timeDifferenceInDays,
          daysToCount
        );
      if (daysToCount.length !== 7) {
        finalTimeDifference =
          (timeWithOnlyCountDays * utilities.oneDayTimeIMilinSeconds) /
          utilities.timeMeasurementMultiplier[timeMeasurement];
      } else {
        finalTimeDifference =
          difference / utilities.timeMeasurementMultiplier[timeMeasurement];
      }

      if(customMessuaremetActive){
        finalTimeDifference = customUnitObject.value *timeWithOnlyCountDays;
      }

      setDifferenceInTime(finalTimeDifference);

    }
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Time Between App</h1>

        <Timepicker value="From: " onChange={(time) => setFromTime(time)} />

        <Timepicker value="To: " onChange={(time) => setToTime(time)} />
        {customMessuaremetActive ?
        <CustomTimeMeassurement setcustomUnitObject = {setCustomUnitObject} customUnitObject = {customUnitObject}/>:
        <TimeMeasurementSelect
          value={timeMeasurement}
          onChange={setTimeMeasurement}
        />}
        
        <div>{differenceInTime}</div>
        <Options
          setTakeEndDate={setTakeEndDate}
          selectedDays={daysToCount}
          setSelectedDays={setDaysToCount}
          setCustomMessuaremetActive = {setCustomMessuaremetActive}
        />

      </header>
    </div>
  );
}

export default App;
