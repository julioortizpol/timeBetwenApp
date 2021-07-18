//const

const timeMeasurementMultiplier = {
    seconds: 1000 * 60,
    hours: 1000 * 60 * 60,
    days: 1000 * 60 * 60 * 24,
    weeks: 1000 * 60 * 60 * 24 * 7,
    months: 1000 * 60 * 60 * 24 * 30,
    Years: 1000 * 60 * 60 * 24 * 365,
  };

const oneDayTimeIMilinSeconds = 86400000;


//functionts

function getTimeDifferenceOfDateStringInMiliseconds(dateParams, oneDayTimeIMilinSeconds){
    let fromDate = new Date(dateParams.fromTime);
      let toDate = new Date(dateParams.toTime);
      let difference = toDate.getTime() - fromDate.getTime();
      difference += dateParams.takeEndDate ? oneDayTimeIMilinSeconds : 0;
      return difference
  }

function subtractDaysThatDontCount(dayIndex, days, daysToCount) {
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

  export default {
    subtractDaysThatDontCount,
    oneDayTimeIMilinSeconds,
    timeMeasurementMultiplier,
    getTimeDifferenceOfDateStringInMiliseconds
  }
