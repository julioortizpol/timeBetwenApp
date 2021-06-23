export default function Timepicker(props) {
  return (
    <div>
      <div>
        <label>{props.value}</label>
        <input
          type="date"
          id="time"
          name="time"
          onChange = {(e)=>{props.onChange(e.target.value)}}
        />
      </div>
    </div>
  );
}
