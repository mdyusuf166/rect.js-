// function SecondOne() {
//   // let todoName = "Buy Milk";
//   // let todoDate = "4/10/2023";

//   return (
//     <div className="row mt-3">
//       <div className="col-4">{todoName}</div>
//       <div className="col-6">{todoDate}</div>
//       <div className="col-2">
//         <button type="button" className="btn btn-danger">Done</button>
//       </div>
//     </div>
//   );
// }

// export default SecondOne;
// import style from './css/second.module.css';
// export default function SecondOne({ todoItems }) {
//   return (
//     <div className="items-container">
//       {todoItems.map((item) => (
//         // <TodoItem todoDate={item.date} todoName={item.name} > </TodoItem>
//         // <div  className="todo">
//         //   <p>{item.name}</p><p>{item.date}</p>
//         // </div>
//         <div class="container text-center">
//   <div class="row align-items-center">
//     <div class="col">
//       {item.name}
//     </div>
//     <div class="col">
//       {item.date}
//     </div>
//     <div class="col yousuf">
//       <div><button type="button" class="btn btn-danger">Done</button>   
//       </div>

//     </div>
//   </div>
// </div>
        
//       ))}
//       {/* <div><button type="button" class="btn btn-danger">Danger</button></div> */}
//     </div>
    
//   );
// }


// // import TodoItem from "./TodoItem"; // ✅ অবশ্যই import করতে হবে

// // export default function SecondOne({ todoItems }) {
// //   return (
// //     <div className="items-container">
// //       {todoItems.map((item, index) => (
// //         <TodoItem
// //           key={index}                // ✅ unique key যোগ করা হয়েছে
// //           todoDate={item.date}
// //           todoName={item.name}
// //         />
// //       ))}

// //       <div>
// //         <button type="button" className="btn btn-danger">
// //           Danger
// //         </button>
// //       </div>
// //     </div>
// //   );
// // }



import style from './css/second.module.css';

export default function SecondOne({ todoItems }) {
  return (
    <div className="items-container">
      {todoItems.map((item, index) => (
        <div key={index} className="container text-center">
          <div className="row align-items-center">
            <div className="col">
              {item.name}
            </div>
            <div className="col">
              {item.date}
            </div>
            <div className={`col ${style.yousuf}`}>
              <button type="button" className="btn btn-danger">
                Done
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}


