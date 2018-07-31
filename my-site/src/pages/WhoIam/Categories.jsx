import React from 'react';

import './Categories.css';

class Categories extends React.Component {


   afficheButton =() => {
                    if(document.getElementById("sous-success").style.display == "block" )
                     document.getElementById("sous-success").style.display = "none";

                            else
                document.getElementById("sous-success").style.display = "block";

              };
   afficheButton2 =()=> {
                      if(document.getElementById("sous-training").style.display == "block" )
                       document.getElementById("sous-training").style.display = "none";
                                else
                    document.getElementById("sous-training").style.display = "block";
};
   afficheButton3 = ()  =>{
                      if(document.getElementById("sous-work").style.display == "block" )
                           document.getElementById("sous-work").style.display = "none";
                                    else
                        document.getElementById("sous-work").style.display = "block";
};

afficheButton4 = () => {
          if(document.getElementById("sous-continue").style.display == "block" )
       document.getElementById("sous-continue").style.display = "none";
            else
      document.getElementById("sous-continue").style.display = "block";

    };

              render() {
                return (
<div className="end">
   <nav>
    <ul class="e">
      <li id="success" className="cursor" onClick={this.afficheButton}>
        <i className="fa fa-chevron-circle-down" style={{fontSize: 24}} />Dîplomes
        <ul id="sous-success" className="sub-menu">
          <li className="category"> Ut pretium justo eu iaculis hendrerit.</li>
          <li className="category">Nullam vulputate sodales ex, quis porta purus luctus sit amet)</li>
          <li className="category">Ut in malesuada neque.</li>
        </ul>
      </li>
      <div className="essai-bordure" />
      <li id="training" className="cursor" onClick={this.afficheButton2}>
        <i className="fa fa-chevron-circle-down" style={{fontSize: 24}} />Experiences
        <ul id="sous-training" className="sub-menu">
          <li className="category">Nulla quis dolor id est accumsan ullamcorper.</li>
          <li className="category">Duis justo eros, volutpat eget vehicula ut, vulputate sit amet lacus</li>
          <li className="category">Fusce vulputate velit nec maximus efficitur.</li>
          <li className="category">Vestibulum dictum mi in vestibulum finibu</li>
        </ul>
      </li>
      <div className="essai-bordure" />
      <li id="work-group" className="cursor" onClick={this.afficheButton3}>
        <i className="fa fa-chevron-circle-down" style={{fontSize: 24}} />Travail en réseau
        <ul id="sous-work" className="sub-menu">
          <li className="category">Mauris facilisis commodo nunc id luctus.</li>
          <li className="category">Integer ipsum elit, venenatis ut facilisis ut, pellentesque nec turpis</li>
          <li className="category">Fusce et libero id ligula condimentum viverra.</li>
        </ul>
      </li>
      <div className="essai-bordure" />
      <li id="continue-training" className="cursor" onClick={this.afficheButton4}>
        <i className="fa fa-chevron-circle-down" style={{fontSize: 24}} />Formation continue</li>
      <ul id="sous-continue" className="sub-menu">
        <li className="category">Maecenas bibendum posuere nibh quis egest.
          Donec aliquet faucibus dui, et fermentum quam rutrum accumsan
   </li>
      </ul>
      <div className="essai-bordure" />
    </ul>
  </nav>
</div>
);
}
}
export default Categories;
