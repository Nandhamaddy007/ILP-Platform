import React, { useEffect } from "react";
import BarChart from "../Charts/BarChart";
import VaccinesSharpIcon from "@mui/icons-material/VaccinesSharp";
import GavelIcon from "@mui/icons-material/Gavel";
import EngineeringIcon from "@mui/icons-material/Engineering";
import "../../assets/styles/welcomePage.css";
import NavigationBar from "../NavigationBar";
import { useState } from "react";
import { Badge } from "@mui/material";
import { Link } from "react-router-dom";
import GradeRender from "./GradeRender";
import Groups from "./Groups";

const WelcomePage = () => {
  useEffect(()=>{},[window.screen.width])
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
  const [index, setIndex] = useState();
  const [showComponent, setShowComponent] = useState(false);
  const [show, setShow] = useState({ index: null });
  const showHidden = (i) => {
    console.log(i);

    setShow({
      index: i,
    });
  };

  const hidden = (i) => {
    if (i == show.index) {
      setShowComponent(!showComponent);
    } else {
      setShowComponent(true);
    }
  };
  return (
    <div className="welcomepage-home">
      <>
        <NavigationBar />

        <section className="section-wrap">
          <div className="section-row">
            {/* mobile view */}

            {window.screen.width<=450 ? <div>
<Groups  data={renderData}
                 />
</div>:<>
            {renderData.map((data, ind) => {
              return (
                <> {/* PC view */}
                  <GradeRender
                    data={data}
                    index={ind}
                    hide={showHidden}
                    show={hidden}
                  />
                </>
              );
            })}        
          {showComponent && (
            <HiddenComponent
              data={renderData[show.index]?.categories}
              grade={renderData[show.index]?.grade}
            />
          )}
          </>
}
          
</div>
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

export default WelcomePage;
