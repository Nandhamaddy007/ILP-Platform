import { Link } from 'react-router-dom';
export default function Groups(props){
  let sample={
    Class10:{Doctor:"20",Engineer:"7",Lawyer:"14"},
    Class11:{Doctor:"10",Engineer:"17",Lawyer:"4"},
    Class12:{Doctor:"5",Engineer:"8",Lawyer:"24"}
  }
    return(
        <>
        <div className="container">        
        <div className="accordion" id="classAccordion">
          {Object.keys(sample).map((val,index)=>{
            return(
              <div className="accordion-item">
              <h2 className="accordion-header" id={val+"heading"}>
                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                data-bs-target={"#"+val} aria-expanded="false" aria-controls={val}>
                  {val}
                </button>
              </h2>
              <div id={val} className="accordion-collapse collapse" aria-labelledby={val+"heading"} 
              data-bs-parent="#classAccordion" >
                <div >
                  <ol className="d-flex flex-column" style={{paddingRight:"4%"}}>
                    {Object.keys(sample[val]).map((text,i)=>{
                      return(
  <Link to={"/filter/"+val+"/"+text}>
  <li className=" card mt-2">
  <div className="card-body">{text} <span className="badge text-bg-success float-end">{sample[val][text]}</span> </div></li>
  </Link>   )
                    })}                                     
                  </ol>
                </div>
              </div>
            </div>
            )
          })}
   
     
    </div>
</div>
        </>
    )
}