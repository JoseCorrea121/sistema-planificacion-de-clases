import { useState } from 'react';
import './InputDate.css';


function InputDate(props) {
    const [value, setValue] = useState('');

    return (
        <div className='input-container'>
            <label className='input-label'>{ props.etiqueta }</label>
            <div className='date-container'>
                <input
                    className='input-date'
                    type="date"
                    name={ props.name }
                    value={ value }
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
        </div>
    );
}

export default InputDate;
