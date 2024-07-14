import './InputTextBox.css';


function InputTextBox(props) {
    return (
        <div className='box-container'>
            <label className='box-label'>{ props.etiqueta }</label>
            <div className='box-input-container'>
                <textarea className='box-input' name={ props.name }></textarea>
            </div>
        </div>
    );
}

export default InputTextBox;
