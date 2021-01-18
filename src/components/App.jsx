import React, { useState, useEffect } from 'react';

import WelcomeBox from './WelcomBox';
import NameBox from './NameBox';

import '../CSS/root.css';

function App() {
  const [name, setName] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    setName(e.target.name.value);
  };

  const getTime = () => {
    const time = new Date();
    return `${time.getHours()}:${time
      .getMinutes()
      .toString()
      .padStart(2, '0')}`;
  };

  const [time, setTime] = useState(getTime());

  useEffect(() => {
    setInterval(() => {
      if (time !== getTime()) {
        setTime(getTime());
      }
    }, 1000);
  }, [time]);

  const getTimeArea = () => {
    const time = new Date().getHours();
    console.log(time);

    switch (true) {
      case time < 5:
        return 'Bonne nuit';
      case time < 12:
        return 'Bon matin';
      case time < 20:
        return 'Bonne journée';
      case time >= 20:
        return 'Bonne soirée';
      default:
        return 'Erreur, nouvel espace temps découvert!';
    }
  };
  return (
    <div className="main">
      <h1 className="time">{time}</h1>
      {name ? (
        <NameBox name={name} timeArea={getTimeArea()} />
      ) : (
        <WelcomeBox onSubmit={onSubmit} />
      )}
      <p className="citation">
        <cite>
          "Le ridicule ne tue pas, sinon je serais mort depuis longtemps!"
        </cite>
      </p>
    </div>
  );
}

export default App;
