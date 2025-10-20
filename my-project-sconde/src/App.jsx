// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
// import heading  from './assets/heading'
// import first_one from './assets/first_one'

// function App() {
 
  

//   return (
//      <>
//      {/* <center>
//     //    <h1> Todo APP</h1>
//     //  </center> */}
//       {/* <div class="row">
//     <div class="col-8">col-8</div>
//     <div class="col-4">col-4</div>
//     <div class="col-2">
//     <button type="button" class="btn btn-success">Success</button>
//     </div>

//   </div> */}
//   <heaing/>
//   <first_one/>
  

// {/* <div class="row">
//   <div class="col-4">
//     <input type="text" placeholder="Enter value"/>
//   </div>
//   <div class="col-6">
//     <input type="date"/>
    
//   </div>
//   <div class="col-2">
//     <button type="button" class="btn btn-success w-100">Success</button>
//   </div>
// </div> */}



// <div class="row">
//   <div class="col-4">
//     Buy Milk
//   </div>
//   <div class="col-6">
//      4/10/2023
    
//   </div>
//   <div class="col-2">
//     <button type="button" class="btn btn-danger">Success</button>
//   </div>
// </div>


// <div class="row">
//   <div class="col-4">
//     Go to Colloage
//   </div>
//   <div class="col-6">
//     4/10/2023
    
//   </div>
//   <div class="col-2">
//     <button type="button" class="btn btn-danger">Success</button>
//   </div>
// </div>
    
//     </>
  
//   );
// }


// export default App




import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


import Heading from './assets/heading'
import FirstOne from './assets/first_one'
import Second_one from './assets/second_one'  
import Last  from './assets/last'
import './App.css'

function App() {
  return (
    <>
      {/* <center>
        <h1> Todo APP</h1>
      </center> */}

      {/* <div className="row">
        <div className="col-8">col-8</div>
        <div className="col-4">col-4</div>
        <div className="col-2">
          <button type="button" className="btn btn-success">Success</button>
        </div>
      </div> */}
      
        <center>
      

      <Heading />
      <FirstOne />
      <Second_one/>
      <Last/>
      
      </center>
      

      {/* <div className="row">
        <div className="col-4">
          <input type="text" placeholder="Enter value"/>
        </div>
        <div className="col-6">
          <input type="date"/>
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success w-100">Success</button>
        </div>
      </div> */}
{/* 
      <div className="row mt-3">
        <div className="col-4">Buy Milk</div>
        <div className="col-6">4/10/2023</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">Done</button>
        </div>
      </div> */}

      {/* <div className="row mt-3">
        <div className="col-4">Go to College</div>
        <div className="col-6">4/10/2023</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger">Done</button>
        </div>
      </div> */}
    </>
  );
}

export default App;
// App.jsx
