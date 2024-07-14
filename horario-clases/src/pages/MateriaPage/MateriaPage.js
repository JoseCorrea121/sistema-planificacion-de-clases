import { useLocation } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Add from '../../components/Add/Add';
import ElementoButton from '../../components/ElementoButton/ElementoButton';

import './MateriaPage.css';


function MateriaPage({ params }) {
    const location = useLocation();

    console.log(params);

    const secciones = [];

    for (let i = 0; i < 20; i++) {
        secciones.push(
            <ElementoButton
                codigo={ i }
                nombre={ i }
                span="prueba"
            ></ElementoButton>
        );
    }

    return (
        <div className='materiaPage-container'>
            <Header perfil="true" back="true"></Header>
            <div className='h2-container'>
                <h2 className='h2-materia'>Back End</h2>
            </div>
            <div className='body-container'>
                <div className='header-container'>
                    <h3 className='h3-secciones'>Secciones</h3>
                    <Add></Add>
                </div>
                <div className='secciones-list'>
                    { secciones }
                </div>
            </div>
        </div>
    );
}

export default MateriaPage;
