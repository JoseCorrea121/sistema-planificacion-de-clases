import Header from '../../components/Header/Header';
import EditButton from '../../components/EditButton/EditButton';

import './ActividadPage.css';


function ActividadPage() {
    return (
        <div className='actividadPage-container'>
            <Header perfil="true" back="true"></Header>
            <div className='datos-container'>
                <div className='datos-actividad'>
                    <h2 className='actividad-dato'>E-actividad 2.1</h2>
                    <span className='actividad-fecha'>cualquiera</span>
                </div>
                <div>
                    <EditButton></EditButton>
                </div>
            </div>
            <p>mucho</p>
        </div>
    );
}

export default ActividadPage;
