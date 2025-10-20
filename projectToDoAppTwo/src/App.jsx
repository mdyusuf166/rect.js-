
// import FirstOne from './assets/First_one';
// import Second_one from './assets/Second_one';
// import Last from './assets/Last';
// import Heading from './assets/Heading';
// import './App.css'

// function App() {
//   return (<>
//      <center>
      

//       <Heading />
//       <FirstOne />
//       <Second_one/>
//       <Last/>
      
//       </center>

 
//     </>
  
//   );
// }
// import Heading from "./assets/Heading";
// import FirstOne from "./assets/FirstOne";
// import Second_one from "./assets/Second_one";
// import Last from "./assets/Last";
// import "./App.css";

// function App() {
//   return (
//     <div style={{ textAlign: "center" }}>
//       <Heading />
//       <FirstOne />
//       <Second_one />
//       <Last />
//     </div>
//   );
// }

// export default App;


// export default App;


import Heading from "./assets/Heading";
import FirstOne from "./assets/FirstOne";
import Second_one from "./assets/Second_one";
import Last from "./assets/Last";
import "./App.css";


function App() {

  const todoItems=[
    {
      name:"Buy Milk",
      date:"4/10/2023",
    },
    {
      name : " Go to College",
      date : "4/10/2023",
    }
  ]
  return (
    <div style={{ textAlign: "center" }}>
      <Heading />
      <FirstOne />
      <Second_one todoItems={todoItems}/>
      <Last />
    </div>
  );
}

export default App;
