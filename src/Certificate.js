// Certificate.js

import React from 'react';
import './certificate.css';



const Certificate = ({ studentName, score }) => {
  return (
    <div className="certificate">
      <h2 class="hd">Certificate of Completion</h2>
      
      <p id="p1">This is to certify that</p>
      <h3 id="h3">{studentName}</h3>
      {/* <img src='download.png'/> */}
      <p id="p1">has scored {score} marks in the quiz.</p>
      {/* <p id="p1">for active paticipation in the uiz</p> */}
    </div>
  );
};

export default Certificate;
