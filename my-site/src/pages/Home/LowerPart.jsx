import React from 'react';

import './LowerPart.css';
 import Schedule from './Schedule.jsx';
 import Form from './Form.jsx';
//

const LowerPart = () => (
  <div className="partie-basse">

  <div className="container-fluid">

    <div className="row">

      <div className="col-md-6 col-lg-6">
        <Schedule />
      </div>

      <div className="col-md-6 col-lg-6">
        <Form />
      </div>

  </div>
 </div>
  </div>
);

export default LowerPart;
