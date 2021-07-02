import { useState, useEffect } from "react";
import "./App.css";
import Timepicker from "./TimeField";
import TimeMeasurementSelect from "./TimeMeasurementSelect";
import Options from "./OptionsComponent/Options";
function App() {
  const [fromTime, setFromTime] = useState();
  const [toTime, setToTime] = useState();
  const [differenceInTime, setDifferenceInTime] = useState();
  const [timeMeasurement, setTimeMeasurement] = useState("days");
  const [takeEndDate, setTakeEndDate] = useState(false);
  //represent days of week being 0 Sun and 6 Sat
  const [daysToCount, setDaysToCount] = useState([0, 1, 2, 3, 4, 5, 6]);
  const timeMeasurementMultiplier = {
    seconds: 1000 * 60,
    hours: 1000 * 60 * 60,
    days: 1000 * 60 * 60 * 24,
    weeks: 1000 * 60 * 60 * 24 * 7,
    months: 1000 * 60 * 60 * 24 * 30,
    Years: 1000 * 60 * 60 * 24 * 365,
  };

  function subtractDaysThatDontCount(dayIndex, days) {
    let daysCounter = [0, 0, 0, 0, 0, 0, 0];
    console.log(dayIndex);
    for (let i = 0; i < days; i++) {
      daysCounter[dayIndex] += 1;
      dayIndex = dayIndex < 6 ? dayIndex + 1 : 0;
    }
    let daysCountFiltered = [];
    console.log(daysCounter);
    console.log(daysToCount);
    daysToCount.forEach((dayIndex) =>
      daysCountFiltered.push(daysCounter[dayIndex])
    );

    days = daysCountFiltered.reduce((a, b) => a + b, 0);
    return days;
  }

  const oneDayTimeIMilinSeconds = 86400000;
  useEffect(() => {
    calculateTimeDifference();
  });

  function calculateTimeDifference() {
    if (fromTime && toTime) {
      let fromDate = new Date(fromTime);
      let toDate = new Date(toTime);
      let difference = toDate.getTime() - fromDate.getTime();
      difference += takeEndDate ? oneDayTimeIMilinSeconds : 0;
      console.log(daysToCount.length);
      let finalTimeDifference;
      if (daysToCount.length != 7) {
        let timeDifferenceInDays =
          difference / timeMeasurementMultiplier["days"];
        let timeWithOnlyCountDays = subtractDaysThatDontCount(
          fromDate.getDay(),
          timeDifferenceInDays
        );
        finalTimeDifference =
          (timeWithOnlyCountDays * oneDayTimeIMilinSeconds) /
          timeMeasurementMultiplier[timeMeasurement];
      } else {
        finalTimeDifference =
          difference / timeMeasurementMultiplier[timeMeasurement];
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

        <TimeMeasurementSelect
          value={timeMeasurement}
          onChange={setTimeMeasurement}
        />
        <div>{differenceInTime}</div>
        <Options
          setTakeEndDate={setTakeEndDate}
          selectedDays={daysToCount}
          setSelectedDays={setDaysToCount}
        />

        <div></div>
      </header>
    </div>
  );
}

export default App;
