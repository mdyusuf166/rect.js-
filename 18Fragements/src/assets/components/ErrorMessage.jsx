// const ErrorMessage =() =>{
//   let foodItems = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];
//   return (<>
//      {foodItems.length === 0 && <h2>No Food Items Available</h2>}

//   </>)
// }

// export default ErrorMessage;







/* const ErrorMessage =() =>{
//   let foodItems = ["Pizza", "Burger", "Pasta", "Salad", "Sushi"];
//   return (<>
//      {foodItems.length === 0 && <h2>No Food Items Available</h2>}

//   </>)
// }

// export default ErrorMessage;*/

const ErrorMessage = ({ items }) => {
  return (
    <>
      {items.length === 0 && (
        <p className="text-danger text-center">No Food Items Available</p>
      )}
    </>
  );
};

export default ErrorMessage;
