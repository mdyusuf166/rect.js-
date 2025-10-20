// Fooditems.jsx
// import Items from './Items.jsx'; // ✅ Import name ঠিক করো

// function FoodItems({ items }) { // ✅ props destructure করে নাও
//   return (
//     <ul className="list-group">
//       {items.map((item, index) => (
//         <Items key={index} fooditem={item} />
//       ))}
//     </ul>
//   );
// }

// export default FoodItems;
// src/assets/components/FoodItems.jsx

import Items from './Items';

function FoodItems({ items }) {
  return (
    <ul className="list-group">
      {items.map((item, index) => (
        <Items key={index} fooditem={item} />
      ))}
    </ul>
  );
}

export default FoodItems;
