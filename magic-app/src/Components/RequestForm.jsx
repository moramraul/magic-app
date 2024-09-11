import Select from 'react-select';
import { formActions, useDispatch } from '../store/store.js'


const optionFormat = [{value: 'Standard', label: 'Simptandard'}, {value: 'Pioneer', label: 'Pioneer'}, {value: 'Modern', label: 'Modern'}];
const optionColors = [{value: 'G', label: 'Green'}, {value: 'R', label: 'Red'}, {value: 'U', label: 'Blue'}, {value: 'W', label: 'White'}, {value: 'B', label: 'Black'}]
export default function RequestForm() {
const dispatch = useDispatch()
    function handleFormInput(event) {
        event.preventDefault();
        dispatch(formActions.colectFormData())
    }


    return (
        <div className='form-container'>
            <form>
                <label>Select Format:</label>
                <Select options={optionFormat}/>
                <label>Select Colors:</label>
                <Select isMulti options={optionColors}/>
                <button onClick={(e) => handleFormInput(e)}></button>
            </form>
        </div>
    )
}