import BackButton from "../BackButton/BackButton";
import SearchButton from "../SearchButton/SearchButton";
import PerfilButton from "../PerfilButton/PerfilButton";

import "./Header.css";


function Header(props) {
  return (
    <header className="header-page">
      <h1 className="logo">UVM Horarios</h1>
      <div className="botones-header">
        { props.perfil && <PerfilButton></PerfilButton> }
        { props.search && <SearchButton></SearchButton> }
        { props.back && <BackButton link={ props.link }></BackButton> }
      </div>
    </header>
  );
}

export default Header;
