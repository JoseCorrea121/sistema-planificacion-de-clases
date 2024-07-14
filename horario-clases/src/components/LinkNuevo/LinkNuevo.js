import { useState } from 'react';
import './LinkNuevo.css';


function LinkNuevo(props) {
    const [color, setColor] = useState('#21005D');
    const [decoration, setDecoration] = useState('underline');

    return (
        <a
            style={{ color: color, textDecoration: decoration }}
            onMouseEnter={() => setColor('#49454F')}
            onMouseLeave={() => setColor('#21005D')}
            onMouseDown={() => setDecoration('none')}
            onMouseUp={() => setDecoration('underline')}
            className='link-nuevo'
        >
            { props.content }
        </a>
    );
}

export default LinkNuevo;
