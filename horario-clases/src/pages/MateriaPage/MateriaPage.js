import { useParams } from 'react-router-dom';

import Header from '../../components/Header/Header';
import Add from '../../components/Add/Add';
import Card from '../../components/Card/Card';
import ElementoButton from '../../components/ElementoButton/ElementoButton';

import './MateriaPage.css';
import { useEffect, useState } from 'react';


function MateriaPage(props) {
    const [secciones, setSecciones] = useState();
    const params = useParams();

    localStorage.removeItem('origen');

    useEffect(() => {
        fetch(`http://localhost:8080/sectionslist?idMateria=${ params.materiaID }`)
          .then((json) => json.json())
          .then((data) => {
            const array = [];

            for (const { idSeccion, siglas, nombre, profesor } of data.data) {
              array.push(
                <ElementoButton
                  link={ `http://localhost:3000/materia/${ params.materia }/${ params.materiaID }/seccion/${ nombre }/${ idSeccion }` }
                  codigo={ siglas }
                  nombre={ nombre }
                  span={ profesor }
                ></ElementoButton>
              );
            }

            if(array.length == 0){
              array.push(
                  <Card
                      message="Aun no tiene secciones creadas"
                  ></Card>
              );
          }

            setSecciones(array);
          });
      }, []);

    return (
        <div className='materiaPage-container'>
            <Header
                perfil="true"
                back="true"
                link={ `http://localhost:3000` }></Header>
            <div className='h2-container'>
                <h2 className='h2-materia'>{ params.materia }</h2>
            </div>
            <div className='body-container'>
                <div className='header-container'>
                    <h3 className='h3-secciones'>Secciones</h3>
                    <Add link={`/materia/${ params.materia }/${ params.materiaID }/nuevaSeccion`}></Add>
                </div>
                <div className='secciones-list'>
                    { secciones }
                </div>
            </div>
        </div>
    );
}

export default MateriaPage;
