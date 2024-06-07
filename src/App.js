// src/App.js
import React from 'react';
import { Card } from 'react-bootstrap';
import Name from './Name';
import Price from './Price';
import Description from './Description';
import Image from './Image';

const App = () => {
  const firstName = "Akeju Mariam";

  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Name />
          <Price />
          <Description />
          <Image />
        </Card.Body>
      </Card>
      <p>Hello, {firstName ? firstName : "there!"}</p>
      {firstName && <img src={`/IMG_20221225_201438_946.jpg`} alt={firstName} />}
    </div>
  );
};

export default App;

