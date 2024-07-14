import { useState } from "react";
import Dropdown from "react-dropdown";

import Header from "../../components/Header/Header";
import InputText from "../../components/InputText/InputText";
import LinkNuevo from "../../components/LinkNuevo/LinkNuevo";
import SaveButton from "../../components/SaveButton/SaveButton";
import CancelButton from "../../components/CancelButton/CancelButton";

import './PerfilPage.css';


function PerfilPage() {
    const [rol, setRol] = useState('profesor');
    const opciones = [
        { value: 'profesor', label: 'Profesor' },
        { value: 'director', label: 'Director' }
    ];

    return (
        <div className="registro-container">
            <Header back='true' link={ localStorage.getItem('previousPath_perfil') }></Header>
            <div className="form-register">
                <div className="registro-h3-container">
                    <h3 className="registro-h3">Regístrese</h3>
                </div>
                <InputText etiqueta="Correo" name="correo"></InputText>
                <InputText etiqueta="Usuario" name="usuario"></InputText>
                <InputText etiqueta="Contraseña" name="password" password='true'></InputText>
                <InputText etiqueta="Repetir Contraseña" name="password2" password='true'></InputText>
                <InputText etiqueta="Nombre" name="nombre"></InputText>
                <InputText etiqueta="Apellido" name="apellido"></InputText>
                <div className="input-select">
                    <label className='etiqueta-text'>Rol</label>
                    <Dropdown
                        options={ opciones }
                        onChange={ setRol }
                        value={ rol }
                    ></Dropdown>
                </div>
                <div className="link-registrar">
                    <span className="link-label">¿Ya está registrado?</span>
                    <LinkNuevo content='Inicie Sesión'></LinkNuevo>
                </div>
                <div className="form-footer">
                    <SaveButton></SaveButton>
                    <CancelButton></CancelButton>
                </div>
            </div>
        </div>
    );
}

export default PerfilPage;
