import Calendar from 'react-calendar';
import { useState } from 'react';

import PreviousButton from '../PreviousButton/PreviousButton';
import NextButton from '../NextButton/NextButton';
import MesButton from '../MesButton/MesButton';
import LinkNuevo from '../LinkNuevo/LinkNuevo';

import getMes from '../../functions/mes';
import getDia from '../../functions/dia';

import './Calendario.css';


function    Calendario(props) {
    const [value, onChange] = useState(new Date());
    const mes = getMes(value);
    const fecha = new Date();

    return (
        <div className='calendar'>
            <div className='fecha-contenedor'>
                <h2 className='fecha-actual'>{ getDia(fecha) }, { fecha.getDate() } de { getMes(fecha) }</h2>
            </div>
            <hr className='linea' />
            <div className='control-container'>
                <div className='control'>
                    <MesButton month={ mes } year={ value.getFullYear() }></MesButton>
                    <div className='cambio-mes-botones'>
                        <PreviousButton fecha={ value } setMonth={ onChange }></PreviousButton>
                        <NextButton fecha={ value } setMonth={ onChange }></NextButton>
                    </div>
                </div>
            </div>
            <div className='dias'>
                <Calendar onChange={ onChange } value={ value }></Calendar>
            </div>
            <div className='footer-container'>
                <div className='footer-calendar'>
                    { props.trimestre && <LinkNuevo content='Crear Trimestre'></LinkNuevo> }
                    { props.evento && <LinkNuevo content='Asignar Evento'></LinkNuevo> }
                    { props.clase && <LinkNuevo content='Asignar Clase' to={ props.link } clase="true"></LinkNuevo> }
                </div>
            </div>
        </div>
    );
}

export default Calendario;
