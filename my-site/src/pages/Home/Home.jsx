import React from 'react';

import './Home.css';
import Activities from './Activities.jsx';
import LowerPart from './LowerPart.jsx';


const Home = () => (
   <div className="luid">
  {/* <div className="image-center"></div> */}
     {/* <div className="5"> </div> */}
     <img src={require('../images/image1.jpg')} className="img-responsive" alt="img"  />

         <h1 className="title"> C.T, psychologue </h1>
        <Activities />
           <LowerPart />
         </div>

);

export default Home;
