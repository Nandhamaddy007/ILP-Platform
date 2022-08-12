import React from "react";
import { useState, useEffect } from "react";
const Greetings = () => {
  const [greetings, setGreetings] = useState("");
  var Digital = new Date();
  var hours = Digital.getHours();
  const teacherName = "Nandha";
  const Greet = () => {
    if (hours >= 5 && hours <= 11) setGreetings("Good Morning");
    else if (hours === 12) setGreetings("Good Noon");
    else if (hours >= 13 && hours <= 17) setGreetings("Good Afternoon");
    else if (hours >= 18 && hours <= 20) setGreetings("Good Evening");
    else if (hours >= 21 && hours <= 11) setGreetings("Good Night");
  };
  useEffect(() => {
    Greet();
  }, []);

  return (
    <>
      <h5>
        {greetings},<b> {teacherName}</b>
      </h5>
    </>
  );
};

export default Greetings;
