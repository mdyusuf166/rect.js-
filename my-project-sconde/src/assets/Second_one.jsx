// function second_one(){
//   let todoName = "Buy Milk";
//   let todoDate = "4/10/2023";
//   return (
    
//       <div className="row mt-3">
//         {/* <div className="col-4">Buy Milk</div>
//         <div className="col-6">4/10/2023</div> */}
//         <div className="col-4">{todoName}</div>
//         <div className="col-6">{todoData}</div>

//         <div className="col-2">
//           <button type="button" className="btn btn-danger">Done</button>
//         </div>
//       </div>


//   );
// }

// export default second_one;



function SecondOne() {
  let todoName = "Buy Milk";
  let todoDate = "4/10/2023";

  return (
    <div className="row mt-3">
      <div className="col-4">{todoName}</div>
      <div className="col-6">{todoDate}</div>
      <div className="col-2">
        <button type="button" className="btn btn-danger">Done</button>
      </div>
    </div>
  );
}

export default SecondOne;
