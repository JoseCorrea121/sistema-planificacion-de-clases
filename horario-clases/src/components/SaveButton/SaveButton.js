import { Link } from 'react-router-dom';

import './SaveButton.css';


const  SaveButton = (props) => {
    let enviarPeticion = true;
    for(const x of Object.keys(props.body)){
        if((props.body[x] == '')) enviarPeticion = false;
    }
   
    if(enviarPeticion){
        return (
            <Link
                className='save-button'
                onClick={() => {
                    if(props.componente == 'sesion') props.body.password = btoa(props.body.password);
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
            > { props.label } </Link>
        );
    }else{
        return (
            <button
                className='save-button-disable'
                disabled='true'
            > { props.label } </button>
        );
    }
   
}

export default SaveButton;
