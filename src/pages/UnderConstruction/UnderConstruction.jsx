import React from 'react';
import construction from '../../assets/under_construction.mp4';
import './UnderConstruction.css';

const UnderConstruction = () => (
  <div className="underConstructionContainer">
    <video className="underConstructionVideo" src={construction} autoPlay loop muted />
  </div>
);

export default UnderConstruction;
