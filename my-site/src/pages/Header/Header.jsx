/*
 * Npm import
 */
import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
/*
 * Local import
 */
import './Header.css';

const Header = () => (

      <div>
      <nav className="navbar navbar-toggleable-md navbar-inverse bg-inverse">
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <Link to="/" className="navbar-brand" >Accueil</Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link to="/Quisuisje" className="nav-link" >Qui suis-je ? <span className="sr-only">(current)</span></Link>
            </li>
            <li className="nav-item active">
              <Link to="/LieuTarif" className="nav-link" href="#">Lieu et tarif </Link>
            </li>
            <li className="nav-item active">
              <Link to="/QuestionsResponses" className="nav-link " href="#">Questions - réponses</Link>
            </li>
          </ul>
        </div>
      </nav>
      <div className="double-border"> </div>

</div>
    );


export default Header;
