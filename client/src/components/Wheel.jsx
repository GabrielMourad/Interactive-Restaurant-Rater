import React, { useState } from "react";
import "./Wheel.css";

export const Wheel = () => {
  function name() {
    var element = document.getElementById("c");
    element.classList.add("start-rotate");
    setTimeout(() => {
      element.classList.add("stop-rotate");
    }, 10000);
  }

  return (
    <div>
      <div className="arrow"></div>
      <ul className="circle" id="c">
        <li>
          <div className="text" contentEditable="true" spellCheck="false" value = {"1"}>
            1
          </div>
        </li>
        <li>
          <div className="text" contentEditable="true" spellCheck="false" value = {"2"}>
            2
          </div>
        </li>
        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            3
          </div>
        </li>
        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            4
          </div>
        </li>
        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            5
          </div>
        </li>
        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            6
          </div>
        </li>
        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            7
          </div>
        </li>
        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            8
          </div>
        </li>
        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            9
          </div>
        </li>
        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            10
          </div>
        </li>
        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            11
          </div>
        </li>
        <li>
          <div className="text" contentEditable="true" spellCheck="false">
            12
          </div>
        </li>
      </ul>
      <button className="spin-button" onClick={name}>
        Spin
      </button>
    </div>
  );
};

export default Wheel;
