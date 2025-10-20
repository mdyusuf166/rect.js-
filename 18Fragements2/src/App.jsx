
// import './App.css'
// // import 'bootstrap/dist/css/bootstrap.min.css'
// // import Fooditems from './assets/components/
// // import Fooditems from "./assets/components/Fooditems";
// import FoodItems from "./assets/components/FoodItems";


// import ErrorMessage from './assets/components/ErrorMessage'


// function App() {
//    let foodItems = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];
 

//   return (
//     <>
//       <h1>Healthy Food</h1>
//       <ErrorMessage items={foodItems} />
//       <FoodItems items={foodItems} />
//     </>
//   )
// }

// export default App

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FoodItems from './assets/FoodItems';
import ErrorMessage from './assets/ErrorMessage';

function App() {
  const foodItems = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"]; // ← চাইলে খালি অ্যারে করেও টেস্ট করতে পারো

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4 food-heading">Healthy Food</h1>
      <ErrorMessage items={foodItems} />
      <FoodItems items={foodItems} />
    </div>
  );
}

export default App;
