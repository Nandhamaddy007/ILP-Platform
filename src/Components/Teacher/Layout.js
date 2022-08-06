import NavigationBar from "../NavigationBar";
import "../../assets/styles/welcomePage.css";
import { Card } from "@mui/material";
import BoyRoundedIcon from "@mui/icons-material/BoyRounded";
import GirlRoundedIcon from "@mui/icons-material/GirlRounded";
import CompletedActComponent from "./CompletedAct";
import Activities from "./Activities";
import Greetings from "./Greetings";
import { data } from "jquery";
import { Link } from "react-router-dom";
export default function Layout(props) {
  const grade9 = [
    {
      grade: "9th Grade",
      name: "Motivation",
      description:
        "Don’t expect that you’ll be able to take in everything you need to study quickly and without difficulty. Give yourself the time to take small steps and divide big topics into smaller chunks. You’ll learn something new every day, which means you’re making progress every day.",
      lastDate: "1/1/2023",
    },
  ];
  const grade10 = [
    {
      grade: "10th Grade",
      name: "Why should I work ",
      description:
        "Don’t expect that you’ll be able to take in everything you need to study quickly and without difficulty. Give yourself the time to take small steps and divide big topics into smaller chunks. You’ll learn something new every day, which means you’re making progress every day.s",
      lastDate: "1/1/2023",
    },
  ];
  return (
    <>
      <div className="welcomepage-home">
        <NavigationBar />
        <section className="section-wrap">
          <div className="act-section-row">
            <div>
              <Card variant="outlined" sx={{ p: 2, margin: 2 }}>
                <div id="gradient">
                  <Greetings />
                </div>
              </Card>
              <Card variant="outlined">
                <div>
                  <div style={{ margin: "1rem" }}>
                    {" "}
                    <h3>
                      Total No of Students: <b>124</b>
                    </h3>{" "}
                  </div>
                  <div className="act-section-row">
                    <div>
                      {/* <BoyRoundedIcon
                        className="icon boy-icon"
                        sx={{ fontSize: "5rem" }}
                      /> */}
                      {/* <h3 style={{ marginLeft: "4.5rem" }}>
                        Boys: <b>76</b>
                      </h3> */}
                    </div>
                    <div>
                      {/* <GirlRoundedIcon
                        className="icon girl-icon"
                        sx={{ fontSize: "5rem" }}
                      /> */}
                      {/* <h3 style={{ marginLeft: "4.5rem" }}>
                        Girls: <b>48</b>
                      </h3> */}
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          <div className="act-section-row">
            <Card
              variant="outlined"
              sx={{ p: 2, margin: 2, paddingLeft: 8, paddingRight: 8 }}
            >
              <h1 class="act-text">Activities</h1>
              <div>
                <Activities activities={grade9} />
                <div class="button">
                  {grade9.map((data, index) => {
                    return (
                      <Link
                        to={"/filter/" + data.grade + "/" + "All Career"}
                        className="link"
                      >
                        <button class="act-button " id="register" type="submit">
                          career choice 9th Grade
                        </button>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </Card>
            <Card
              variant="outlined"
              sx={{ p: 2, margin: 2, paddingLeft: 8, paddingRight: 8 }}
            >
              <h1 class="act-text">Activities</h1>
              <div>
                <Activities activities={grade10} />
                <div class="button">
                  {grade10.map((data, index) => {
                    return (
                      <Link
                        to={"/filter/" + data.grade + "/" + "All Career"}
                        className="link"
                      >
                        <button class="act-button " id="register" type="submit">
                          career choice 9th Grade
                        </button>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </Card>
          </div>
          <CompletedActComponent />
        </section>
      </div>
    </>
  );
}
