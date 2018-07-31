import React from 'react';

import './Activities.css';

const Activities = () => (

  <div className="container-fluid">
  <div className="row">
    <div className="col-xs col-md-6 col-lg-3">
      <div className="prestation">
          <div className="icons">
              <i className="fa fa-calendar center" aria-hidden="true"></i>
          </div>
              <h4 className="mini-title">Rendez-vous </h4>
              <p className="little-para"> Lorem ipsum </p>
              <p className="little-para"> Lorem ipsum</p>

      </div>

    </div>

    <div className="col-xs col-md-6 col-lg-3">
      <div className="prestation">
          <div className="icons">
              <i className="fa fa-user center" aria-hidden="true"></i>
          </div>
              <h4 className="mini-title">Spécialisation</h4>
              <p className="little-para"> Lorem ipsum </p>
              <p className="little-para"> Lorem ipsum</p>
          </div>
    </div>

    <div className="col-xs col-md-6 col-lg-3">
      <div className="prestation">
          <div className="icons">
              <i className="fa fa-comments center" aria-hidden="true"></i>
          </div>
              <h4 className="mini-title">Consultations</h4>
              <p className="little-para"> Lorem ipsum </p>
              <p className="little-para"> Lorem ipsum</p>
          </div>

    </div>

    <div className="col-xs col-md-6 col-lg-3">
      <div className="prestation">
          <div className="icons">
              <i className="fa fa-users center" aria-hidden="true"></i>
          </div>
              <h4 className="mini-title">Réseaux</h4>
              <p className="little-para"> Lorem ipsum </p>
              <p className="little-para"> Lorem ipsum</p>
          </div>
  </div>
</div>
</div>
)
export default Activities;
