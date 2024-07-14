import { useState } from 'react';

import Header from '../../components/Header/Header';
import InputText from '../../components/InputText/InputText';
import InputSelect from '../../components/InputSelect/InputSelect';
import SaveButton from '../../components/SaveButton/SaveButton';
import CancelButton from '../../components/CancelButton/CancelButton';
import InputTextBox from '../../components/InputTextBox/InputTextBox';

import './EditarActividadPage.css';


function EditarActividadPage() {
    const [clase, setClase] = useState('Lunes, 17 de agosto de 2024');

    const claseOpciones = [
        { value: '1', label: 'Lunes, 17 de agosto de 2024' },
        { value: '1', label: 'Lunes, 18 de agosto de 2024' },
        { value: '1', label: 'Lunes, 19 de agosto de 2024' },
        { value: '1', label: 'Lunes, 20 de agosto de 2024' },
        { value: '1', label: 'Lunes, 21 de agosto de 2024' },
        { value: '1', label: 'Lunes, 22 de agosto de 2024' },
        { value: '1', label: 'Lunes, 23 de agosto de 2024' }
    ];

    return (
        <div className='actividad-container'>
            <Header perfil="true" back="true"></Header>
            <div className='container-container'>
                <div className='formActividad-container'>
                    <div className='h3-container'>
                        <h3 className='h3-actividad'>Editar Actividad</h3>
                    </div>
                    <InputText
                        etiqueta="Actividad"
                        name="actividad"
                    ></InputText>
                    <InputSelect
                        value={ clase }
                        setValue={ setClase }
                        opciones={ claseOpciones }
                        label="Clase"
                        link="Asignar clase"
                    ></InputSelect>
                    <div className='inputTextBox-container'>
                        <InputTextBox
                            etiqueta="Descripción"
                            name="descripcion"
                        ></InputTextBox>
                    </div>
                    <div className='form-footer'>
                        <SaveButton></SaveButton>
                        <CancelButton></CancelButton>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EditarActividadPage;
