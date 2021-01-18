import React from 'react';

function WelcomBox({ onSubmit }) {
  return (
    <div className="welcome">
      <h1>Entrez votre nom</h1>
      <form onSubmit={onSubmit}>
        <input type="text" name="name" id="welcome__input" />
      </form>
    </div>
  );
}

export default WelcomBox;
