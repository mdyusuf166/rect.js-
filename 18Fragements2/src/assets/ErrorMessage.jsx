// function ErrorMessage({ items }) {
  
// return(
//   <>
//        {foodItems.length === 0 && <h2>No Food Items Available</h2>}
//        </>
// );
// }

// export default ErrorMessage;// src/assets/components/ErrorMessage.jsx

function ErrorMessage({ items }) {
  if (!items || items.length === 0) {
    return <h2 className="text-danger">No Food Items Available</h2>;
  }

  return null;
}

export default ErrorMessage;
