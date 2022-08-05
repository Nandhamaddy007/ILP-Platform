import { Accordion, AccordionDetails, AccordionSummary, Card,  CardContent, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CircularProgressComponent from "../CircularProgress";
import EmojiEventsTwoToneIcon from '@mui/icons-material/EmojiEventsTwoTone';
import StarIcon from '@mui/icons-material/Star';
import UpcomingTwoToneIcon from '@mui/icons-material/UpcomingTwoTone';

export default function CompletedActComponent(props){
    return (

        <>
         <Card variant="outlined"         
         >
      <CardContent >
        <div style={{ position: 'relative', display: 'inline-flex' }}>
            3 out of 10 activities completed for 9th Grade &nbsp;&nbsp;&nbsp; <CircularProgressComponent /></div>
      </CardContent>
      <CardContent >
        <div style={{ position: 'relative', display: 'inline-flex' }}>
            3 out of 10 activities completed for 10th Grade &nbsp;&nbsp; <CircularProgressComponent /></div>
      </CardContent>
      <CardContent >
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
           
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <div style={{ position: 'relative', display: 'inline-flex' }} >
            Completed Activities &nbsp; &nbsp;  <EmojiEventsTwoToneIcon />            
            </div>
             </Typography>
           
        </AccordionSummary>
        <AccordionDetails>
        <h6>
                9th Grade
             </h6>
             <div>
                <StarIcon />
                Activity 1 - May 2022</div>
                <div>
                <StarIcon />
                Activity 2 - June 2022</div>
                <div>
                <StarIcon />
                Activity 3 - July 2022</div>
<br />
                <h6>
                10th Grade
             </h6>
             <div>
                <StarIcon />
                Activity 1 - May 2022</div>
                <div>
                <StarIcon />
                Activity 2 - June 2022</div>
                <div>
                <StarIcon />
                Activity 3 - July 2022</div>

        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
           
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>
            <div style={{ position: 'relative', display: 'inline-flex' }} >
            Upcoming Activities &nbsp; &nbsp;  <UpcomingTwoToneIcon />            
            </div>
             </Typography>
           
        </AccordionSummary>
        <AccordionDetails>
        <h6>
                9th Grade
             </h6>
             <div>
                <StarIcon />
                Activity 5 - August 2022</div>
               
<br />
                <h6>
                10th Grade
             </h6>
             <div>
                <StarIcon />
                Activity 5 - August 2022</div>
              

        </AccordionDetails>
      </Accordion>
      </CardContent>
    
    </Card>
        </>
    )
}