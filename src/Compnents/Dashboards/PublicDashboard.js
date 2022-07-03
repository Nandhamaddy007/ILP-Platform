import './dashboard.css'
export default function PublicDashboard(props){
    let img="https://i0.wp.com/www.giveindia.org/blog/wp-content/uploads/2019/04/10-NGOs-rejuvenating-education-in-India-banner.jpg?fit=1200%2C675&ssl=1"
                return(
                    <>
                     <h1 className='animate__animated animate__fadeInDown text-overlay'>Welcome to students career management portal</h1>
                        <header className='overlay'>                       
                             <div>  <img src={img} className="transparent"  alt="students" style={{height:"70vh", width:"100vw"}} /></div> 
                        </header>
<div className='animate__animated animate__fadeInDown container'>
<div className='row p-2'>
    <div className='offset-md-2 col-md-3'>
    <div class="alert alert-success" role="alert">
  Over 40 districts
</div>
    </div>
    <div className=' offset-md-3 col-md-3'>
    <div class="alert alert-success" role="alert">
  Over 10,000 Schools
</div>
    </div>
</div>
<div className='row p-2'>
    <div className='offset-md-2 col-md-3'>
    <div class="alert alert-success" role="alert">
  Over 11,000 Teachers
</div>
    </div>
    <div className='offset-md-3  col-md-3'>
    <div class="alert alert-success" role="alert">
  Around 10,000 Activities
</div>
    </div>
</div>
</div>
                    </>
                )
            }