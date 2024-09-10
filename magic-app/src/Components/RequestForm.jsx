import Select from 'react-select';
const optionFormat = [{value: 'Standard', label: 'Standard'}, {value: 'Pioneer', label: 'Pioneer'}, {value: 'Modern', label: 'Modern'}];
const optionColors = [{value: 'G', label: 'Green'}, {value: 'R', label: 'Red'}, {value: 'U', label: 'Blue'}, {value: 'W', label: 'White'}, {value: 'B', label: 'Black'}]
export default function RequestForm() {
    return (
        <div className='form-container'>
            <form>
                <label>Select Format:</label>
                <Select options={optionFormat}/>
                <label>Select Colors:</label>
                <Select isMulti options={optionColors}/>
            </form>
        </div>
    )
}