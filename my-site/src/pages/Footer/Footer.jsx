/*
 * Npm import
 */
import React from 'react';
import GoogleMapReact from 'google-map-react';

// import { NavLink } from 'react-router-dom';
/*
 * Local import
 */
import './Footer.css';
import Maps from './Maps.jsx';

class Footer extends React.Component {
   // initMap = () => {
   //       // Map options
   //       var options = {
   //           zoom : 8,
   //           center: {lat: 49.117851, lng: 6.18195}
   //       }
   //     // New map
   //       var map = new google.maps.Map(document.getElementById('map'), options);
   //
   //       // Add marker
   //       var marker = new google.maps.Marker({
   //           position:{lat: 49.117851, lng: 6.18195},
   //           map:map,
   //       });
   //
   //       var infoWindow = new google.maps.InfoWindow({
   //           content:'<h6> cabinet psy </h6>'
   //       });
   //
   //       marker.addListener('click', function(){
   //           infoWindow.open(map, marker);
   //       });
   //   }

   render() {
   return (
  <div className="footer"> <i className="fa fa-facebook" aria-hidden="true" />
   <div className="info-footer">
     <div className="container-fluid">
     <div className="row">
       <div className="col-md-6 col-lg-6">
         <h4 className="info">Contact</h4>
         <div className="icon"><i className="fa fa-user" aria-hidden="true" />
           <span className="info-user">Charlize Theron, psychologue à Metz, psychothérapeute </span></div>
         <div className="icon"><i className="fa fa-map-marker" aria-hidden="true" />
           <span className="info-user">4 rue de Lorem à Metz </span></div>
         <div className="icon"><i className="fa fa-phone" aria-hidden="true" />
           <span className="info-user">06.06.06.06.06 </span></div>
         <div className="icon"><i className="fab fa-facebook" aria-hidden="true" />
           <i className="fab fa-linkedin" aria-hidden="true" />
           <i className="fa fa-envelope-square" aria-hidden="true" />
         </div>
       </div>
       <div className="col-md-6 col-lg-6">
          <Maps />
       </div>

     </div>
   </div>
</div>
 </div>

)
}
}

export default Footer;
