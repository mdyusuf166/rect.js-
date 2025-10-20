// const Items = (fooditem) => {
//   return (
//     <li className="list-group-item">
//       {fooditem}
//     </li>
//   );
// };

// export default Items;
// src/assets/components/Items.jsx

// const Items = ({ fooditem }) => {
//   return <li className="list-group-item kg-item">{fooditem}</li>;
// };

// export default Items;
// 

// import styles from './item.module.css';

// const Items = ({ fooditem }) => {
//   return <li className="list-group-item kg-item"><span className = "kg-span">{fooditem}</span></li>;
// };

// export default Items;




// import styles from './item.module.css';

// const Items = ({ fooditem }) => {
//   return <li className={`${"kg-item"}`}><span className = "kg-span">{fooditem}</span></li>;
// };

// export default Items;

import styles from './item.module.css';
const Items=({fooditem})=>{
    return <li className={`${styles['kg-item']}`}><span className = {styles['kg-span']}>{fooditem}</span></li>;
}
export default Items;