import NavigationBar from '../NavigationBar'
import '../../assets/styles/welcomePage.css'
import { Avatar, Card, Paper } from '@mui/material'
import BoyRoundedIcon from '@mui/icons-material/BoyRounded';
import GirlRoundedIcon from '@mui/icons-material/GirlRounded';
export default function Layout(props){
    return(
        <>
        <div className="welcomepage-home">
        <NavigationBar />
        <section className="section-wrap">
          
        <h3>Greetings [Teacher name]</h3>
      <div> 
      <Card variant="outlined">
      <div className='section-column'>
        {/* column1 */}
        <div>
           <div style={{margin:"2rem"}}> <h1>Total No of Students: <b>124</b></h1> </div>
            <div className='section-row'>
            <div>
            <BoyRoundedIcon className='icon boy-icon' sx={{fontSize:"10rem"}} />
            <h3 style={{marginLeft:"4.5rem"}}>Boys: <b>76</b></h3>
            </div>
            <div>                     
            <GirlRoundedIcon className='icon girl-icon' sx={{fontSize:"10rem"}} />
            <h3 style={{marginLeft:"4.5rem"}}>Girls: <b>48</b></h3>       
            </div>
            </div></div>
{/* column2 */}
<div>
    {/* if want can add pie chart here */}
</div>
            </div>
            </Card>
      </div>
        
        </section>
        </div>
        </>
    )
}