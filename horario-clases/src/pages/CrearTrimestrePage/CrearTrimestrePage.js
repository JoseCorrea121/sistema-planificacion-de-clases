import { useState } from 'react';

import InputDate from '../../components/InputDate/InputDate';
import Header from '../../components/Header/Header';
import SaveButton from '../../components/SaveButton/SaveButton';
import CancelButton from '../../components/CancelButton/CancelButton';

import './CrearTrimestrePage.css';


function CrearTrimestrePage() {
    return (
        <div className='trimestre-container'>
            <Header perfil='true' back='true'></Header>
            <div className='form-container'>
                <div className='h3-container'>
                    <h3 className='h3-trimestre'>Crear Trimestre</h3>
                </div>
                <InputDate etiqueta="Prueba" name="prueba"></InputDate>
                <InputDate etiqueta="Prueba" name="prueba"></InputDate>
                <div className='form-footer'>
                    <SaveButton></SaveButton>
                    <CancelButton></CancelButton>
                </div>
            </div>
        </div>
    );
}

export default CrearTrimestrePage;
