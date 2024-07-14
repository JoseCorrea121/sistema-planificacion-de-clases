import Dropdown from 'react-dropdown';

import LinkNuevo from '../LinkNuevo/LinkNuevo';

import './InputSelect.css';


function InputSelect(props) {
    return (
        <div className="input-select">
            <div className='label-container'>
                <label className='etiqueta-text'>{ props.label }</label>
                { props.link && <LinkNuevo content={ props.link }></LinkNuevo> }
            </div>
            <Dropdown
                options={ props.opciones }
                onChange={ props.setValue }
                value={ props.value }
            ></Dropdown>
        </div>
    );
}

export default InputSelect;
