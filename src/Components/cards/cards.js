import React from "react";
import "./Cards.css";
import Card from "../card/card";
import ActivityCard from "../card/ActivityCard";

export const cardsData = [
  {
    color: {
      backGround: "#f9f5f2",
      boxShadow: "0px 10px 20px 0px #f9f5f2",
    },
  },
];
export const grade9 = [
  {
    color: {
      backGround: "#fef7db",
      boxShadow: "0px 10px 20px 0px #f9f5f2",
      grade: "9th Grade",
      name: "Motivation",
      description:
        " You’ll learn something new every day, which means you’re making progress every day.",
      lastDate: "1/1/2023",
      expandClass: "ExpandedCard-act ",
    },
  },
];
export const grade10 = [
  {
    color: {
      backGround: "#e1f0ff",
      boxShadow: "0px 10px 20px 0px #f9f5f2",
      grade: "10th Grade",
      name: "Motivation",
      description:
        "You’ll learn something new every day, which means you’re making progress every day.",
      lastDate: "12/04/2023",
      expandClass: "ExpandedCard-act-2 ",
    },
  },
];

const Cards = () => {
  return (
    <div className="Cards">
      {cardsData.map((card, id) => {
        return (
          <>
            <div className="parentContainer" key={id}>
              <h5>
                Good Morning, <b>Nandha</b>
              </h5>
              <Card color={card.color} />
            </div>
          </>
        );
      })}
      {grade9.map((card, id) => {
        return (
          <>
            {" "}
            <div className="parentContainer" key={id}>
              <h5 className="act-h">
                <b>Activities</b>
              </h5>
              <ActivityCard color={card.color} />
            </div>
          </>
        );
      })}
      {grade10.map((card, id) => {
        return (
          <>
            {" "}
            <div className="parentContainer" key={id}>
              <h5 className="act-h">
                <b className="hd">Activities</b>
              </h5>
              <ActivityCard color={card.color} />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Cards;
