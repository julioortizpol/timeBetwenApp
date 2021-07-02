import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import ToggleButton from 'react-bootstrap/ToggleButton'

function DaysSelection(props){

    
return(
    <div>
        <div>Dways of week</div>
    <ToggleButtonGroup type="checkbox" defaultValue={props.selectedDays} onChange = {(value)=>{props.setSelectedDays(value)}} className="mb-2">
    <ToggleButton checked = {true} value={0}>Mon</ToggleButton>
    <ToggleButton checked = {true} value={1}>Tue</ToggleButton>
    <ToggleButton checked = {true} value={2}>Wed</ToggleButton>
    <ToggleButton checked = {true} value={3}>Thurs</ToggleButton>
    <ToggleButton checked = {true} value={4}>Fri</ToggleButton>
    <ToggleButton checked = {true} value={5}>Sat</ToggleButton>
    <ToggleButton checked = {true}  value={6}>Sun</ToggleButton>

  </ToggleButtonGroup>
    </div>
)

}

export default DaysSelection;