import React from 'react';

import './Form.css';

const Form = () => (
  // <div>
  //   <h1> hello </h1>
  // </div>

        <div className="place-formulaire">
          <h3 className="title-formulaire"> Me contacter </h3>
          <form>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Votre nom</label>
              <input type="text" className="form-control" id="nom" placeholder="Votre nom" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Votre email</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="nom@example.com" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlInput1">Sujet</label>
              <input type="text" className="form-control" id="sujet" placeholder="Votre sujet" />
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1">Votre message</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} defaultValue={""} />
            </div>
            <button type="button" className="btn btn-outline-dark">Envoyer</button>
          </form>
        </div>
      );

export default Form;
