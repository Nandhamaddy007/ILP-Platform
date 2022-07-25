export default function Registration(props){
    
    return(
        <>
        <h1>Registration: </h1>
        <div className="container pt-4">
            <div className="card">
                <div className="card-body">
                <div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
  <label for="floatingInput">Name: </label>
</div>
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
  <label for="floatingInput">Code: </label>
</div>
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
  <label for="floatingInput">Mobile number: </label>
</div>
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
  <label for="floatingInput">Password: </label>
</div>
<div class="form-floating mb-3">
  <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
  <label for="floatingInput">Confirm password: </label>
</div>
<div className="row">
    <div className="col">
        <button className="btn btn-primary">Register</button>
    </div>
    <div className="col">
        <button className="btn btn-danger float-end">Cancel</button>
    </div>
</div>
                </div>
            </div>
        </div>
        </>
    )
}