import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

//
  import Header from './pages/Header/Header.jsx';
 import Footer from './pages/Footer/Footer.jsx';

 import Home from './pages/Home/Home.jsx';
 import WhoIam from './pages/WhoIam/WhoIam.jsx'
  import LieuTarif from './pages/LieuTarif/LieuTarif.jsx'
  import QuestionsResponses from './pages/QuestionsResponses/QuestionsResponses.jsx'




class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
         <Header />
        <Route exact path="/" component={Home} />
         <Route exact path="/Quisuisje" component={WhoIam} />
       <Route exact path="/LieuTarif" component={LieuTarif} />
       <Route exact path="/QuestionsResponses" component={QuestionsResponses} /> 

           <Footer />
      </div>
    </Router>

    );
  }
}

export default App;
