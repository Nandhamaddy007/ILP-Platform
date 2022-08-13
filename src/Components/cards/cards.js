import React from "react";
import "./Cards.css";
import Card from "../card/card";
import ActivityCard from "../card/ActivityCard";
import { color } from "@mui/system";
import Greetings from "../Teacher/Greetings";

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
      lastDate: "8/12/2022",
      expandClass: "ExpandedCard-act ",
      buttonBg: "rgb(255,234,166)",
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
      lastDate: "8/13/2022",
      expandClass: "ExpandedCard-act-2 ",
      buttonBg: "rgb(174,219,255)",
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
              <Greetings />

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
              <ActivityCard
                color={card.color}
                bg={card.color.buttonBg}
                grade={card.color.grade}
              />
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
              <ActivityCard
                color={card.color}
                bg={card.color.buttonBg}
                grade={card.color.grade}
              />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default Cards;
