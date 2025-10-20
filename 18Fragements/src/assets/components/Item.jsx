// import Fooditems from "./FoodItems";

// const Items = () =>{
//   return(
//     <li key={Fooditems} className="list-group-item">
//       {items}  
//     </li>
//   );
// };

// export default Items;




// const Items = (props) =>{
//   return(
//     <li key={props.fooditems} className="list-group-item">
//       {props.fooditems}  
//     </li>
//   );
// };

// export default Items;


// Items.jsx
// import Fooditems from "./FoodItems";
// const Items = (props) => {
//   return (
//     <li className="list-group-item">
//       {props.fooditem}
//     </li>
//   );
// };

// export default Items;

const Items = (props) => {
  return (
    <li className="list-group-item">
      {props.fooditem}
    </li>
  );
};

export default Items;
