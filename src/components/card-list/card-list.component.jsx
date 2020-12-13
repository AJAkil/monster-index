import React from "react";
import { Card } from '../card/card.component.jsx'
import "./card-list.styles.css";

export const CardList = (props) => {
  // put in as children, the names are put into grids
  return (
    <div className="card-list">
      {props.monsters.map((monster) => (
        <Card key={monster.id} monster={monster}/>
      ))}
    </div>
  );
};
