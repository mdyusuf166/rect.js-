// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Fooditems from './assets/components/FoodItems' 
// import ErrorMessage from './assets/components/ErrorMessage'
// function App() {
 
//   let foodItems=["Pizza", "Burger", "Pasta", "Salad", "Sushi"];

//   return (
//     <>
// {/* 




//     <h1>Healthy Food</h1>
//     <ul className="list-group">
//       {foodItems.map(item => <li className="list-group-item">{item}</li>)} */}


//     {/* <ul class="list-group">
//   <li class="list-group-item">An item</li>
//   <li class="list-group-item">A second item</li>
//   <li class="list-group-item">A third item</li>
//   <li class="list-group-item">A fourth item</li>
//   <li class="list-group-item">And a fifth one</li>
// </ul> */}

      
//     </>
//   );
// }

// export default App



// function App() {
//   // let foodItems = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];
//   let foodItems = [];
//   if(foodItems.length ==0){
//     return <h1>No Food Items Available</h1>;
//   }

//   return (
//     <>
//       <h1>Healthy Food</h1>
//       <ul className="list-group">
//         {foodItems.map((item ,index) => (
//           <li key ={index} className="list-group-item">
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;



// function App() {
//   // let foodItems = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];
//   let foodItems = [];

//   return (
//     <>
//       <h1>Healthy Food</h1>
//       {foodItems.length === 0 ? <h2>No Food Items Available</h2>: null}
//       <ul className="list-group">
//         {foodItems.map((item ,index) => (
//           <li key ={index} className="list-group-item">
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;



// function App() {
//   // let foodItems = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];
//   let foodItems = [];
//   let emtpyMessage = foodItems.length === 0 ? <h2>No Food Items Available</h2>: null


//   return (
//     <>
//       <h1>Healthy Food</h1>
//       {/* {foodItems.length === 0 ? <h2>No Food Items Available</h2>: null} */}
//       {emtpyMessage}
//       <ul className="list-group">
//         {foodItems.map((item ,index) => (
//           <li key ={index} className="list-group-item">
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;





// function App() {
//   let foodItems = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];
//   // let foodItems = [];
 


//   return (
//     <>
//       <h1>Healthy Food</h1>
//       {/* {foodItems.length === 0 ? <h2>No Food Items Available</h2>: null} */}
//       {foodItems.length === 0 && <h2>No Food Items Available</h2>}
//       <ul className="list-group">
//         {foodItems.map((item ,index) => (
//           <li key ={index} className="list-group-item">
//             {item}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default App;






// function App() {
  

 


//   return (
//     <>
//       <h1>Healthy Food</h1>
//       {/* {foodItems.length === 0 ? <h2>No Food Items Available</h2>: null} */}
//       {/* {foodItems.length === 0 && <h2>No Food Items Available</h2>} */}
//       <ErrorMessage />
//       <Fooditems />
      
      
//     </>
//   );
// }

// export default App;



// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import Fooditems from './assets/components/FoodItems' 
// import ErrorMessage from './assets/components/ErrorMessage'

// function App() {
//   let foodItems = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];
  

 


//   return (
//     <>
//       <h1>Healthy Food</h1>
      
//       <ErrorMessage />
//       <Fooditems />
      
      
//     </>
//   );
// }

// export default App;



import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Fooditems from './components/FoodItems';
import ErrorMessage from './components/ErrorMessage';

function App() {
  let foodItems = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];
  // let foodItems = []; // এভাবে খালি করলে ErrorMessage দেখাবে

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Healthy Food</h1>

      <ErrorMessage items={foodItems} />
      <Fooditems items={foodItems} />
    </div>
  );
}

export default App;
