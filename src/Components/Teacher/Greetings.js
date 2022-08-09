import React from "react";
import { useState, useEffect } from "react";
const Greetings = () => {
  const [greetings, setGreetings] = useState("");
  var Digital = new Date();
  var hours = Digital.getHours();
  const teacherName = "Sherlock Holmes";
  const Greet = () => {
    if (hours >= 5 && hours <= 11)
      setGreetings(`Hello!${teacherName}, Good Morning! Have a nice day.`);
    else if (hours === 12) setGreetings(`Hello! ${teacherName}, Good Noon  `);
    else if (hours >= 13 && hours <= 17)
      setGreetings(`Hello! ${teacherName}, Good Afternoon! `);
    else if (hours >= 18 && hours <= 20)
      setGreetings(`Hello! ${teacherName} ,Good Evening! `);
    else if (hours >= 21 && hours <= 11)
      setGreetings(`Hello! ${teacherName} ,Good Night! `);
    else setGreetings(`Wow! ${teacherName}, You're still awake. Working Late?`);
  };
  useEffect(() => {
    Greet();
  }, []);

  return (
    <>
      <h3>{greetings}</h3>
    </>
  );
};

export default Greetings;
