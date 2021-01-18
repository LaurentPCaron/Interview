import React from 'react';

export default function NameBox({ name, timeArea }) {
  return (
    <div className="welcome">
      <h1>
        {timeArea}: {name}
      </h1>
    </div>
  );
}
