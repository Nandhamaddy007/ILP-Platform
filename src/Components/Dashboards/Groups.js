import { Link } from 'react-router-dom';
export default function Groups(props){
  let sample={
    Class10:{Doctor:"20",Engineer:"7",Lawyer:"14"},
    Class11:{Doctor:"10",Engineer:"17",Lawyer:"4"},
    Class12:{Doctor:"5",Engineer:"8",Lawyer:"24"}
  }
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