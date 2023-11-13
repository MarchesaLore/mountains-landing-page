import React, { useState } from "react"
import './Tabs.css';

export const Tabs = () =>{
  const [visibleTab, setVisibleTab] =  useState(1);
  
  return (
    <div className="Tabs">
      <div className="blue-background">
        <div className="container">
          <button onClick={() => setVisibleTab(1)}  className={visibleTab===1 ?"tab-button active":"tab-button"} data-id="MOUNTAIN1">
            MOUNTAIN 1
          </button>
          <button onClick={() => setVisibleTab(2)}  className={visibleTab===2 ?"tab-button active":"tab-button"} data-id="MOUNTAIN2">
            MOUNTAIN 2
          </button>
        </div>
      </div>
      <div className="mountain-container">
        <div id="MOUNTAIN1" className={visibleTab===1 ?"mountain1 content active":"mountain1 content"}>
          <div className="container">
            <div className="schedule">
              <h6>SCHEDULE</h6>
              <div className="grid-2-col">
                <span>25 Nov 2016</span>
                <span>Vestibulum viverra</span>
                <span>28 Nov 2016</span>
                <span>Vestibulum viverra</span>
                <span></span>
                <span></span>
                <span>18 Dec 2016</span>
                <span>Vestibulum viverra</span>
                <span></span>
                <span></span>
                <span>7 Jan 2016</span>
                <span>Vestibulum viverra</span>
              </div>
            </div>
          </div>
        </div>
        <div id="MOUNTAIN2" className={visibleTab===2 ?"mountain2 content active":"mountain2 content "}>
          <div className="container">
            <div className="schedule">
              <h6>SCHEDULE</h6>
              <div className="grid-2-col">
                <span>17 Nov 2016</span>
                <span>Vestibulum viverra</span>
                <span></span>
                <span></span>
                <span>13 Dec 2016</span>
                <span>Vestibulum viverra</span>
                <span>28 Dec 2016</span>
                <span>Vestibulum viverra</span>
                <span></span>
                <span></span>
                <span>9 Feb 2016</span>
                <span>Vestibulum viverra</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};