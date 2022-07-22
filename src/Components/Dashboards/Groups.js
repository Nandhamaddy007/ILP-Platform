export default function Groups(props){
  let sample={
    Class10:{Doctors:"20",Engineers:"7",Lawyers:"14"},
    Class11:{Doctors:"10",Engineers:"17",Lawyers:"4"},
    Class12:{Doctors:"5",Engineers:"8",Lawyers:"24"}
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
<li className=" card mt-2">
  <div className="card-body">{text} <span className="badge text-bg-success float-end">{sample[val][text]}</span> </div></li>
                      )
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