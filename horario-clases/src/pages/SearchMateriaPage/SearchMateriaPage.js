import ElementoButton from '../../components/ElementoButton/ElementoButton';
import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';

import './SearchMateriaPage.css';


function SearchMateriaPage() {
    const materias = [];

    for (let i = 0; i < 20; i++) {
        materias.push(
            <ElementoButton
                codigo={ i }
                nombre={ i }
                span="algo"
            ></ElementoButton>
        )
    }

    return (
        <div className='searchPage-container'>
            <Header perfil="true" back="true" link="/"></Header>
            <Search></Search>
            <div className='materias-list'>
                { materias }
            </div>
        </div>
    );
}

export default SearchMateriaPage;
