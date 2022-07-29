import React from "react";
import BarChart from "../Charts/BarChart";
import VaccinesSharpIcon from "@mui/icons-material/VaccinesSharp";
import GavelIcon from "@mui/icons-material/Gavel";
import EngineeringIcon from "@mui/icons-material/Engineering";
import "../../assets/styles/welcomePage.css";
import NavigationBar from "../NavigationBar";
import { useState } from "react";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import {
  FaUserNurse,
  FaStethoscope,
  FaUserTie,
  FaUserInjured,
  FaFighterJet,
  FaUserAstronaut,
  FaGavel,
  FaUserGraduate,
  FaDiagnoses,
  FaUtensils,
  FaUserEdit,
} from "react-icons/fa";
const WelcomePage = () => {
  const renderData = [
    {
      grade: "9th Grade",
      totalStudents: "5000",
      categories: { Doctor: 1000, Engineer: 2000, Lawyer: 2000 },
      background: "bg-one",
    },
    {
      grade: "10th Grade",
      totalStudents: "4000",
      categories: { Doctor: 1000, Engineer: 2000, Lawyer: 1000 },
      background: "bg-two",
    },
    {
      grade: "11th Grade",
      totalStudents: "6500",
      categories: { Doctor: 2000, Engineer: 2500, Lawyer: 2000 },
      background: "bg-three",
    },
    {
      grade: "12th Grade",
      totalStudents: "3200",
      categories: { Doctor: 1000, Engineer: 1200, Lawyer: 1000 },
      background: "bg-four",
    },
  ];
  let sample = {
    Class10: { Doctor: "20", Engineer: "7", Lawyer: "14" },
    Class11: { Doctor: "10", Engineer: "17", Lawyer: "4" },
    Class12: { Doctor: "5", Engineer: "8", Lawyer: "24" },
  };
  const [showComponent, setShowComponent] = useState(false);
  const [show, setShow] = useState({ index: null });
  const showHidden = (i) => {
    console.log(i);
    setShow({
      index: i,
    });
    setShowComponent(!showComponent);
  };
  return (
    <div className="welcomepage-home">
      <>
        <NavigationBar />

        <section className="section-wrap">
          <div className="section-row">
            {renderData.map((data, ind) => {
              return (
                <>
                  <GradeRender data={data} index={ind} hide={showHidden} />
                </>
              );
            })}
          </div>
          {showComponent && (
            <HiddenComponent
              data={renderData[show.index]?.categories}
              grade={renderData[show.index]?.grade}
            />
          )}
          {/* <div className="section-row" id="classAccordion">
            {Object.keys(sample).map((val, index) => {
              return (
                <div className="card-wrap" id={val + "heading"}>
                  <div className="bg-one card">
                    <div
                      className="card-body "
                      data-bs-toggle="collapse"
                      data-bs-target={"#" + val}
                      aria-expanded="false"
                    >
                      <div className="card-body-content ">
                        <div className="db-icon">
                          <svg
                            className="svg"
                            aria-hidden="true"
                            focusable="false"
                            data-prefix="fas"
                            data-icon="user-graduate"
                            class="svg-inline--fa fa-user-graduate fa-w-14 "
                            role="img"
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                          >
                            <path
                              fill="currentColor"
                              d="M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z"
                            ></path>
                          </svg>
                        </div>
                        <div className="db-info">
                          <h3>{val}</h3>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    id={val}
                    className="accordion-collapse collapse"
                    aria-labelledby={val + "heading"}
                    data-bs-parent="#classAccordion"
                  >
                    <div>
                      <ol className="d-flex flex-column">
                        {Object.keys(sample[val]).map((text, i) => {
                          return (
                            <>
                              <Link
                                to={"/filter/" + val + "/" + text}
                                className="link"
                              >
                                <div className="card-wrap">
                                  {" "}
                                  <div className="bg-two card">
                                    <div className="card-body">
                                      <div className="card-body-content ">
                                        <div className="db-icon career-icon-wrap">
                                          <span className=" career-icon">
                                            {" "}
                                            {sample[val][text]}
                                          </span>
                                        </div>
                                        <div className="db-info">
                                          <h3> {text}</h3>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </Link>
                            </>
                          );
                        })}
                      </ol>
                    </div>
                  </div>
                </div>
              );
            })}
          </div> */}
          <div className="chart">{<BarChart />}</div>
        </section>
      </>
    </div>
  );
};

export const HiddenComponent = (props) => {
  let sample = {
    Doctor: <VaccinesSharpIcon />,
    Engineer: <EngineeringIcon />,
    Lawyer: <GavelIcon />,
  };
  return (
    <>
      <section className="Hidden-section-wrap">
        <div className="hidden-section-row">
          {Object.keys(props.data).map((data, ind) => {
            return (
              <>
                <Link
                  to={"/filter/" + props.grade + "/" + data}
                  className="link"
                >
                  <div className="Profession-card-wrap">
                    <div className="Profession-bg-one Profession-card">
                      <div className="Profession-card-body">
                        <div className="Profession-card-body-content">
                          <div className="Profession-career-icon-wrap">
                            <i className="icons"> {sample[data]}</i>
                          </div>
                          <div className="Profession-db-info">
                            {/* <Badge
                              badgeContent={props.data[data]}
                              max={10000}
                              color="primary"
                            ></Badge> */}
                            <h3>{data}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
  // return (
  //   <>

  //         <div className="card-wrap">
  //           <div className="bg-one card">
  //             <div className="card-body">
  //               <div className="card-body-content">
  //                 <div className="career-icon-wrap">
  //                   <MedicalServicesIcon />
  //                 </div>
  //                 <div className="db-info">
  //                   <h3>Doctor</h3>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="card-wrap">
  //           <div className="bg-two card">
  //             <div className="card-body">
  //               <div className="card-body-content">
  //                 <div className="career-icon-wrap">
  //                   <EngineeringIcon />
  //                 </div>
  //                 <div className="db-info">
  //                   <h3>Engineer</h3>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //         <div className="card-wrap">
  //           <div className="bg-three card">
  //             <div className="card-body">
  //               <div className="card-body-content">
  //                 <div className="career-icon-wrap">
  //                   <GavelIcon />
  //                 </div>
  //                 <div className="db-info">
  //                   <h3>Lawyer</h3>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </section>
  //   </>
  // );
};
const GradeRender = (props) => {
  console.log(props);
  return (
    <>
      <div className="card-wrap" onClick={() => props.hide(props.index)}>
        <div className={props.data.background + " card"}>
          <div className="card-body">
            <div className="card-body-content">
              <div className="db-icon">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="user-graduate"
                  class="svg-inline--fa fa-user-graduate fa-w-14 "
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                >
                  <path
                    fill="currentColor"
                    d="M319.4 320.6L224 416l-95.4-95.4C57.1 323.7 0 382.2 0 454.4v9.6c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-9.6c0-72.2-57.1-130.7-128.6-133.8zM13.6 79.8l6.4 1.5v58.4c-7 4.2-12 11.5-12 20.3 0 8.4 4.6 15.4 11.1 19.7L3.5 242c-1.7 6.9 2.1 14 7.6 14h41.8c5.5 0 9.3-7.1 7.6-14l-15.6-62.3C51.4 175.4 56 168.4 56 160c0-8.8-5-16.1-12-20.3V87.1l66 15.9c-8.6 17.2-14 36.4-14 57 0 70.7 57.3 128 128 128s128-57.3 128-128c0-20.6-5.3-39.8-14-57l96.3-23.2c18.2-4.4 18.2-27.1 0-31.5l-190.4-46c-13-3.1-26.7-3.1-39.7 0L13.6 48.2c-18.1 4.4-18.1 27.2 0 31.6z"
                  ></path>
                </svg>
              </div>
              <div className="db-info">
                <h3>{props.data.totalStudents}</h3>
                <h6>{props.data.grade}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomePage;
