import React from "react";
import "./app.scss";
import { dataDomain } from "./data";

function App() {
  return (
    <div className="container">
      <div className="card">
        {dataDomain.map((card) => {
          return (
            <div className="cards" key={card.id}>
              <div className="career-card">
                <div
                  className="career-icon"
                  style={{ content: `url(${card.icon})` }}
                ></div>
              </div>
              <div className="career-items">
                <h3>{card.title}</h3>

                <p>{card.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
