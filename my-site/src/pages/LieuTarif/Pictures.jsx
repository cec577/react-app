import React from 'react';

import './Pictures.css';




const Pictures = () => (

  <div>
     <div className="fond">
       <h3 className="titre"> Photos du cabinet de psychologie: bureau, entrée</h3>
     </div>
     <div className="row">
       <div className="col-md-6 col-lg-4 "> <p className="img espace" /></div>
       <div className="col-md-6 col-lg-4 "> <p className="img2 espace" /></div>
       <div className="col-md-12 col-lg-4 "> <p className="img3 espace" /></div>
     </div>
     <div className="fond">
       <h3 className="titre"> Informations pratiques</h3>
     </div>
     <div className="col-lg-12">
       <h4 className="entretiens">Se rendre au cabinet</h4>
       <p className="info-cabinet">Le cabinet se situe à 5 minutes en voiture du centre ville de Metz, dans le quartier Rimard (sud-est de la ville). Il est possible de se garer le long des espaces verts au début de la rue. Le cabinet est aussi accessible en bus, arrêt bonvin, ligne 4.
       </p>
     </div>
   </div>




);

export default Pictures;
