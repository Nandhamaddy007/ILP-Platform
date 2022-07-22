export default function Groups(props){
  let sample={
    Class10:{Doctors:"20",Engineers:"7",Lawyers:"14"},
    Class11:{Doctors:"20",Engineers:"7",Lawyers:"14"},
    Class12:{Doctors:"20",Engineers:"7",Lawyers:"14"}
  }
    return(
        <>
        <div class="container">        
        <div class="accordion" id="classAccordion">
          {Object.keys(sample).map((val,index)=>{
            return(
              <div class="accordion-item">
              <h2 class="accordion-header" id={val+"heading"}>
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
                data-bs-target={"#"+val} aria-expanded="false" aria-controls={val}>
                  {val}
                </button>
              </h2>
              <div id={val} class="accordion-collapse collapse" aria-labelledby={val+"heading"} 
              data-bs-parent="#classAccordion" >
                <div class="accordion-body">
                  <ol className="d-flex flex-column" style={{paddingRight:"3%"}}>
                    {Object.keys(sample[val]).map((text,i)=>{
                      return(
<li className=" card">
  <div className="card-body">{text} <span class="badge text-bg-success float-end">{sample[val][text]}</span> </div></li>
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