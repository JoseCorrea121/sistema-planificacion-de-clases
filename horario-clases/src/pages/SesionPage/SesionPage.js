import Header from '../../components/Header/Header';
import InputText from '../../components/InputText/InputText';
import LinkNuevo from '../../components/LinkNuevo/LinkNuevo';
import SaveButton from '../../components/SaveButton/SaveButton';
import CancelButton from '../../components/CancelButton/CancelButton';

import './SesionPage.css';


function SesionPage() {
    return (
        <div className='sesion-container'>
            <Header back="true"></Header>
            <div className='form-container'>
                <div className='h3-container'>
                    <h3 className='h3-sesion'>Inicie Sesión</h3>
                </div>
                <InputText etiqueta="Usuario" name="dato"></InputText>
                <InputText etiqueta="Contraseña" name="password" password="true"></InputText>
                <div className='link-sesion'>
                    <span className='link-label'>¿No está registrado?</span>
                    <LinkNuevo content='Regístrese'></LinkNuevo>
                </div>
                <div className='form-footer'>
                    <SaveButton></SaveButton>
                    <CancelButton></CancelButton>
                </div>
            </div>
        </div>
    );
}

export default SesionPage;
