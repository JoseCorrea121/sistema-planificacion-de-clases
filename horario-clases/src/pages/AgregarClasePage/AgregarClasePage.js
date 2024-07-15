import { useEffect, useState } from 'react';

import Header from '../../components/Header/Header';
import InputSelect from '../../components/InputSelect/InputSelect';
import SaveButton from '../../components/SaveButton/SaveButton';
import CancelButton from '../../components/CancelButton/CancelButton';

import './AgregarClasePage.css';


function AgregarClasePage() {
    const [trimestre, setTrimestre] = useState({ value: 0 });
    const [trimestreOpciones, setTrimestreOpciones] = useState();
    const [semana, setSemana] = useState('1');
    const [dia, setDia] = useState('1');

    useEffect(() => {
        fetch('url') //si la ruta necesita un parametro como `localhost?id=${ id }`, id va a ser una dependencia de useEffect
            .then(json => json.json())
            .then(data => {
                const array = []

                for (const { id, inicio, fin } of data.data) {
                    array.push({
                        value: id,
                        label: 'YYYY/MM/DD - YYYY/MM/DD'
                    });
                }

                setTrimestreOpciones(array);
                if (array.length) {
                    setTrimestre(array[0]);
                }
            })
    }, ['DEPENDENCIAS, por ejemplo params.materiaID']) // y se registra aqui como [id], si no hay dependencias es un array vacio

    const semanaOpciones = [
        { value: 1,  label: 1 },
        { value: 2,  label: 2 },
        { value: 3,  label: 3 },
        { value: 4,  label: 4 }
    ];
    const diaOpciones = [
        { value: 1,  label: 1 },
        { value: 2,  label: 2 },
        { value: 3,  label: 3 },
        { value: 4,  label: 4 },
        { value: 5,  label: 5 },
        { value: 6,  label: 6 },
        { value: 7,  label: 7 },
    ];

    return (
        <div className='evento-container'>
            <Header perfil='true' back='true'></Header>
            <div className='form-container'>
                <div className='h3-container'>
                    <h3 className='h3-evento'>Asignar Clase</h3>
                </div>
                <InputSelect
                    value={ trimestre }
                    setValue={ setTrimestre }
                    opciones={ trimestreOpciones }
                    label="Trimestre"
                ></InputSelect>
                <InputSelect
                    value={ semana }
                    setValue={ setSemana }
                    opciones={ semanaOpciones }
                    label="Semana"
                ></InputSelect>
                <InputSelect
                    value={ dia }
                    setValue={ setDia }
                    opciones={ diaOpciones }
                    label="Día"
                ></InputSelect>
                <div className='footer-container'>
                    <SaveButton
                        url="http://localhost:8080/subjectinsert"
                        link="/"
                        body={{
                            trimestre: trimestre.value
                        }}
                    ></SaveButton>
                    <CancelButton></CancelButton>
                </div>
            </div>
        </div>
    );
}

export default AgregarClasePage;
