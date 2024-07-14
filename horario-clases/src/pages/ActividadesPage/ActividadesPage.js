import ElementoButton from '../../components/ElementoButton/ElementoButton';
import Add from '../../components/Add/Add';
import Header from '../../components/Header/Header';
import Calendario from '../../components/Calendario/Calendario';

import './ActividadesPage.css';


function ActividadesPage() {
    const actividades = [];

    for (let i = 0; i < 20; i++) {
        actividades.push(
            <ElementoButton
                nombre={ i }
                codigo={ i }
                span="probando"
            ></ElementoButton>
        );
    }

    return (
        <div className='actividades-container'>
            <Header perfil="true" back="true"></Header>
            <div className='body-container'>
                <div className='h1-container'>
                    <h1 className='h1-seccion'>Back End - Sección 1</h1>
                </div>
                <div className='list-calendar'>
                    <div className='actividades-list'>
                        <div className='actividades-header'>
                            <h3 className='actividades-h3'>Actividades</h3>
                            <Add></Add>
                        </div>
                        <div className='actividadesButton-list'>
                            { actividades }
                        </div>
                    </div>
                    <Calendario clase="true"></Calendario>
                </div>
            </div>
        </div>
    );
}

export default ActividadesPage;