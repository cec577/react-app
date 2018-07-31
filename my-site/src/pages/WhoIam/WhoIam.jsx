import React from 'react';

import './WhoIam.css';
import Presentation from './Presentation.jsx';
 import Description from './Description.jsx';
   import Categories from './Categories.jsx';



const WhoIam = () => (
  <div className="base">
    <Presentation />
     <Description />
    <Categories />
</div>
);

export default WhoIam;
