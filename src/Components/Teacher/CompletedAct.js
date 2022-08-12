import { Accordion, AccordionDetails, AccordionSummary, Card,  CardContent, Grid, Paper, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';
import UpcomingTwoToneIcon from '@mui/icons-material/UpcomingTwoTone';
import LinearProgress from '@mui/material/LinearProgress';
import './timeline.css'

export default function CompletedActComponent(props) {
  return (
    <>
      <h2>
        <b>Activity Status</b>
      </h2>

      <div
        style={{
          background: "#c0dedd",
          borderRadius: "10px",
          padding: "3%",
          paddingTop: "1%",
          paddingBottom: "0%",
        }}
      >
        <h3>9th Grade Completion</h3>
        <LinearProgress
          variant="determinate"
          value={30}
          color="success"
          sx={{ padding: "4px", borderRadius: "10px" }}
        />
        <p style={{ padding: "1%" }}>
          3 out of 10 activities completed for 9th Grade &nbsp;&nbsp;&nbsp;{" "}
        </p>
      </div>

      <div
        style={{
          background: "#e6dff1",
          borderRadius: "10px",
          padding: "3%",
          paddingTop: "1%",
          paddingBottom: "0%",
        }}
      >
        <h3>10th Grade Completion</h3>
        <LinearProgress
          variant="determinate"
          value={30}
          color="secondary"
          sx={{ padding: "4px", borderRadius: "10px" }}
        />
        <p style={{ padding: "1%" }}>
          3 out of 10 activities completed for 10th Grade &nbsp;&nbsp;&nbsp;{" "}
        </p>
      </div>

      <div>
        <Typography>
          <div>
            <h3>
              <b>Upcoming Activities</b>
            </h3>
            <h6>
              <b>9th Grade</b>
            </h6>
          </div>
        </Typography>
        <Accordion
          sx={{
            borderRadius: ".5rem",
            boxShadow: "0px 0px 4px 1px #888888",
          }}
        >
          <AccordionSummary
            expandIcon={
              <div
                style={{
                  background: "#5656f6",
                  color: "white",
                  borderRadius: "100%",
                }}
              >
                <ExpandMoreIcon />
              </div>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ background: "#f5f5f5", borderRadius: ".5rem" }}
          >
            <div className="container">
              <h6 className="row">
                {" "}
                <b className="col">Activity 4 Name</b>
              </h6>{" "}
              <div className="row">
                <div className="col">01 August 2022</div>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            This activity is based on see more...
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion
          sx={{
            borderRadius: ".5rem",
            boxShadow: "0px 0px 4px 1px #888888",
          }}
        >
          <AccordionSummary
            expandIcon={
              <div
                style={{
                  background: "#5656f6",
                  color: "white",
                  borderRadius: "100%",
                }}
              >
                <ExpandMoreIcon />
              </div>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ background: "#f5f5f5", borderRadius: ".5rem" }}
          >
            <div className="container">
              <h6 className="row">
                {" "}
                <b className="col">Activity 5 Name</b>
              </h6>{" "}
              <div className="row">
                <div className="col">02 September 2022</div>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            This activity is based on see more...
          </AccordionDetails>
        </Accordion>
        <br />
        <h6>
          <b>10th Grade</b>
        </h6>
        <Accordion
          sx={{ borderRadius: ".5rem", boxShadow: "0px 0px 4px 1px #888888" }}
        >
          <AccordionSummary
            expandIcon={
              <div
                style={{
                  background: "#5656f6",
                  color: "white",
                  borderRadius: "100%",
                }}
              >
                <ExpandMoreIcon />
              </div>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{ background: "#f5f5f5", borderRadius: ".5rem" }}
          >
            <div className="container">
              <h6 className="row">
                {" "}
                <b className="col">Activity 4 Name</b>
              </h6>{" "}
              <div className="row">
                <div className="col">01 August 2022</div>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            This activity is based on see more...
          </AccordionDetails>
        </Accordion>
        <br />
        <Accordion
          sx={{ borderRadius: ".5rem", boxShadow: "0px 0px 4px 1px #888888" }}
        >
          <AccordionSummary
            expandIcon={
              <div
                style={{
                  background: "#5656f6",
                  color: "white",
                  borderRadius: "100%",
                }}
              >
                <ExpandMoreIcon />
              </div>
            }
            aria-controls="panel1a-content"
            id="panel1a-header"
            sx={{
              background: "#f5f5f5",
              borderRadius: ".5rem",
              border: "none",
            }}
          >
            <div className="container">
              <h6 className="row">
                {" "}
                <b className="col">Activity 5 Name</b>
              </h6>{" "}
              <div className="row">
                <div className="col">02 September 2022</div>
              </div>
            </div>
          </AccordionSummary>
          <AccordionDetails>
            This activity is based on see more...
          </AccordionDetails>
        </Accordion>
      </div>
      <br />
      <br />
      <b>
        <h3>Completed Activities</h3>
        <h6>9th Grade</h6>
      </b>
      <MileStone />
    </>
  );
}
function MileStone(props) {
  return (
    <>
      <div class="timeline">
        <div class="mileStonecontainer right">
          <div class="content " style={{ background: "#e0e0e0" }}>
            <Paper
              sx={{
                background: "#c35c5c",
                color: "white",
                textAlign: "center",
                paddingBottom: "1rem",
                marginLeft: "-.1rem",
                marginRight: "-.1rem",
              }}
              elevation={3}
            >
              <b>
                <h2 className="timeline-dt">01 May 2021</h2>
              </b>
            </Paper>
            <p style={{ marginLeft: ".1rem", marginRight: ".1rem" }}>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div>
        <div class="mileStonecontainer left">
          <div class="content" style={{ background: "#e0e0e0" }}>
            <Paper
              sx={{
                background: "#c35c5c",
                color: "white",
                textAlign: "center",
                paddingBottom: "1rem",
                marginLeft: "-.1rem",
                marginRight: "-.1rem",
              }}
              elevation={3}
            >
              <b>
                <h2 className="timeline-dt">01 June 2021</h2>
              </b>
            </Paper>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div>
        <div class="mileStonecontainer right">
          <div class="content" style={{ background: "#e0e0e0" }}>
            <Paper
              sx={{
                background: "#c35c5c",
                color: "white",
                textAlign: "center",
                paddingBottom: "1rem",
                marginLeft: "-.1rem",
                marginRight: "-.1rem",
              }}
              elevation={3}
            >
              <b>
                <h2 className="timeline-dt">01 July 2021</h2>
              </b>
            </Paper>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div>
      </div>
      <br />
      <br />
      <h6>10th Grade</h6>
      <div class="timeline">
        <div class="mileStonecontainer right">
          <div
            class="content "
            style={{
              background: "#e0e0e0",
            }}
          >
            <Paper
              sx={{
                background: "#5e5cbd",
                color: "white",
                textAlign: "center",
                paddingBottom: "1rem",
                marginLeft: "-.1rem",
                marginRight: "-.1rem",
              }}
              elevation={3}
            >
              <b>
                <h2 className="timeline-dt">01 May 2021</h2>
              </b>
            </Paper>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div>
        <div class="mileStonecontainer left">
          <div class="content" style={{ background: "#e0e0e0" }}>
            <Paper
              sx={{
                background: "#5e5cbd",
                color: "white",
                textAlign: "center",
                paddingBottom: "1rem",
                marginLeft: "-.1rem",
                marginRight: "-.1rem",
              }}
              elevation={3}
            >
              <b>
                <h2 className="timeline-dt">01 June 2021</h2>
              </b>
            </Paper>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div>
        <div class="mileStonecontainer right">
          <div class="content" style={{ background: "#e0e0e0" }}>
            <Paper
              sx={{
                background: "#5e5cbd",
                color: "white",
                textAlign: "center",
                paddingBottom: "1rem",
                marginLeft: "-.1rem",
                marginRight: "-.1rem",
              }}
              elevation={3}
            >
              <b>
                <h2 className="timeline-dt">01 July 2021</h2>
              </b>
            </Paper>
            <p>
              Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec
              admodum perfecto mnesarchum, vim ea mazim fierent detracto. Ea
              quis iuvaret expetendis his, te elit voluptua dignissim per, habeo
              iusto primis ea eam.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}