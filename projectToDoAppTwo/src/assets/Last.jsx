function Last (){

  let todoName = "Go to College";
  let todoDate = "4/10/2023";
  return (
    <div className="row mt-3">
      <div className="col-4">{todoName}</div>
      <div className="col-6">{todoDate}</div>
        {/* <div className="col-4">Go to College</div>
        <div className="col-6">4/10/2023</div> */}
        <div className="col-2">
          <button type="button" className="btn btn-danger">Done</button>
        </div>
      </div>

  );
}

export default Last;