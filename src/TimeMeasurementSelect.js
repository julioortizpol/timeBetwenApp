export default function TimeMeasurementSelect(props) {
  return (
    <div>
      <label>
        <select value = {props.value} onChange = {e => props.onChange(e.target.value)}> 
          <option value="seconds">seconds</option>
          <option value="hours">hours</option>
          <option value="days">days</option>
          <option value="weeks">weeks</option>
          <option value="months">months</option>
          <option value="Years">Years</option>
        </select>
      </label>
    </div>
  );
}
