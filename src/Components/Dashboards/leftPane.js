import './dashboard.css'
import { Link } from 'react-router-dom';
import Charts from '../Charts/Charts';
import BarChart from '../Charts/BarChart';
export default function LeftPane(props){
    return(
        <>
         <button class="btn float-end" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" >
                <i class="bi bi-arrow-right-square-fill fs-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"></i>
            </button>
      <div class="offcanvas offcanvas-start w-25" tabindex="-1" id="offcanvas" data-bs-keyboard="false" data-bs-backdrop="false">
    <div class="offcanvas-header">
        <h6 class="offcanvas-title d-none d-sm-block" id="offcanvas">Menu</h6>
        <button type="button" class="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div class="offcanvas-body px-0">
        <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">
            {/* <li class="nav-item">
                <a href="#" class="nav-link text-truncate">
                    <i class="fs-5 bi-house"></i><span class="ms-1 d-none d-sm-inline">Home</span>
                </a>
            </li> */}
            <li>
                <Link  to="details" data-bs-toggle="collapse" class="nav-link text-truncate">
                    <i class="fs-5 bi-speedometer2"></i><span class="ms-1 d-none d-sm-inline">Dashboard </span> </Link>
            </li>
            {/* <li>
                <a href="#" class="nav-link text-truncate">
                    <i class="fs-5 bi-table"></i><span class="ms-1 d-none d-sm-inline">Orders</span></a>
            </li>
            <li class="dropdown">
                <a href="#" class="nav-link dropdown-toggle  text-truncate" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fs-5 bi-bootstrap"></i><span class="ms-1 d-none d-sm-inline">Bootstrap</span>
                </a>
                <ul class="dropdown-menu text-small shadow" aria-labelledby="dropdown">
                    <li><a class="dropdown-item" href="#">New project...</a></li>
                    <li><a class="dropdown-item" href="#">Settings</a></li>
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li>
                        <hr class="dropdown-divider" />
                    </li>
                    <li><a class="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </li>
            <li>
                <a href="#" class="nav-link text-truncate">
                    <i class="fs-5 bi-grid"></i><span class="ms-1 d-none d-sm-inline">Products</span></a>
            </li>
            <li>
                <a href="#" class="nav-link text-truncate">
                    <i class="fs-5 bi-people"></i><span class="ms-1 d-none d-sm-inline">Customers</span> </a>
            </li> */}
        </ul>
    </div>
</div>
{props.right &&<div class="container-fluid">
    <div class="row">
        <div class="col min-vh-100 p-4">
            {/* <!-- toggler --> */}
           
           <h1>{props.name}</h1>
           {/* icons toggle */}
           {props.icons && <div className='row pt-4 container'>
            {/* districts icon */}
            <div className='offset-2 col-sm-12 col-md-2 col-lg-2 m-2 bg-warning bg-gradient rounded'>
                <div>                
               <div className='animate__animated animate__flip pt-1'> <i class="bi bi-geo-alt h1" ></i></div>
            <div className='h2 text-center'>40+ Districts</div>            
                </div>
            </div>
            {/* blocks icon */}
            <div className='col-sm-12 col-md-2 col-lg-2 m-2 rounded bg-success bg-gradient'>
           
                <div className='d-flex flex-row animate__animated animate__bounce pt-1'><i class="bi bi-box h3 "></i>
                <i class="bi bi-box h3 "></i>
                <i class="bi bi-box h3 "></i></div>
                <div className='h2 text-center align-self-end'>50+ Blocks</div>
            </div>
            {/* schools icon */}
            <div className='col-sm-12 col-md-2 col-lg-2 m-2 rounded bg-danger bg-gradient'>
            <div className='animate__animated animate__zoomIn pt-1'>
            <i class="bi bi-building h1 pt-1"></i></div>
            
                <div className='h2 text-center '>10,000+ Schools</div>
            </div>
            {/* teachers icon */}
            <div className='col-sm-12 col-md-2 col-lg-2 m-2 rounded bg-info bg-gradient'>
            <div className='animate__animated animate__slideInDown'>
            <i class="bi bi-person-video3 h1 pt-1"></i></div>
            
                <div className='h2 text-center '>11,000+ Teachers</div>
            </div>
            {/* students icon */}
            <div className='col-sm-12 col-md-2 col-lg-2 m-2 rounded bg-primary bg-gradient'>
            <div className='animate__animated animate__lightSpeedInLeft'>
            <i class="bi bi-people h1"></i></div>
            
                <div className='h2 text-center'>110,000+ Students</div>
            </div>
           </div>}
            {/* end of row */}
            {/* toggle charts */}
           {props.charts && <div className='row pt-4'  >
            
            <div className='col shadow p-3 mb-5 bg-white rounded' >
                <div 
                style={{overflow:"hidden"}}>
                    
                    <Charts />
                   
                    </div>
               
            </div>
            <div className='col shadow p-3 mb-5 bg-white rounded' >
           
                    <div                       
                    >
                <BarChart /></div></div>
                    
            
            </div>}



{/* last div dont go beyond this*/}
        </div>
     


     
    </div>
    
   
</div>}
</>
    )
}