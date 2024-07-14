import { Link } from 'react-router-dom';

import './CancelButton.css';


function CancelButton(props) {
    return (
        <Link
            className='cancel-button'
            to={ props.link }
        >Cancelar</Link>
    );
}

export default CancelButton;
