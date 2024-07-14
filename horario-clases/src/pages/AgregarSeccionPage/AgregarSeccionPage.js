import {  useParams } from 'react-router-dom';

import Header from '../../components/Header/Header';
import InputSelect from '../../components/InputSelect/InputSelect';
import SaveButton from '../../components/SaveButton/SaveButton';
import CancelButton from '../../components/CancelButton/CancelButton';
import InputText from '../../components/InputText/InputText';

import './AgregarSeccionPage.css';
import { useEffect, useState } from 'react';


function AgregarSeccionPage() {
    const [profesores, setProfesores] = useState();
    const [profesor, setProfesor] = useState('1');
    const params = useParams();

    console.log('params', params);

    useEffect(() => {
        fetch(`http://localhost:8080/professors`)
          .then((json) => json.json())
          .then((data) => {
            console.log(data);
            setProfesores(data.data);
          });
      }, []);



    return (
        <div className='seccion-container'>
            <Header perfil='true' back='true'></Header>
            <div className='form-container'>
                <div className='h3-container'>
                    <h3 className='h3-clase'>Asignar Sección</h3>
                </div>
                <InputText
                    etiqueta="Sección"
                    name="seccion"
                ></InputText>
                <InputSelect
                    value={ profesor }
                    setValue={ setProfesor }
                    opciones={ profesores }
                    label="Profesor Encargado"
                ></InputSelect>
                <div className='footer-container'>
                    <SaveButton></SaveButton>
                    <CancelButton></CancelButton>
                </div>
            </div>
        </div>
    );
}

export default AgregarSeccionPage;
