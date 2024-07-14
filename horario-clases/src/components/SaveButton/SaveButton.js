import { Link } from 'react-router-dom';

import './SaveButton.css';


function SaveButton(props) {
    return (
        <Link
            className='save-button'
            onClick={() => {
                fetch(props.url, {
                    method: "POST",
                    mode: "cors",
                    cache: "no-cache",
                    credentials: "same-origin",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(props.body),
                });
            }}
            to={ props.link }
        >Guardar</Link>
    );
}

export default SaveButton;
