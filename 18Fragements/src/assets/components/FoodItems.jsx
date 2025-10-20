// function Fooditems(){
//     let foodItems = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];
//   return(
//       <ul className="list-group">
//         {foodItems.map((item ,index) => (
//           <li key ={index} className="list-group-item">
//             {item}
//           </li>
//         ))}
//       </ul>
//   )
// }

// export default Fooditems;






// function Fooditems(){
//     // let foodItems = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];
//   return(
//       <ul className="list-group">
//         {foodItems.map((item ,index) => (
//           <li key ={index} className="list-group-item">
//             {item}
//           </li>
//         ))}
//       </ul>
//   )
// }

// export default Fooditems;



// import Item from './Item.jsx';

// function Fooditems(){
//     // let foodItems = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];
//   return(
//       <ul className="list-group">
//         {foodItems.map((item) => (
//           // <Item key ={index} item={item} />
//           // <Item FoodItems={item}></Item>
//           <Item  FoodItems={item} />
//         ))}
//       </ul>
//   )
// }

// export default Fooditems;
import Items from './Items';

const FoodItems = (props) => {
  return (
    <ul className="list-group">
      {props.items.map((item, index) => (
        <Items key={index} fooditem={item} />
      ))}
    </ul>
  );
};

export default FoodItems;
