import './App.css'
import UseStatePractice from './projects/learnUseStateHook/UseStatePractice'
import { Parent } from './projects/prop-drilling/components/Parent'
import { AppProjectB } from './projects/learnUseStateHook/projectB/components/AppProjectB';
import { useEffect, useState } from 'react';
import TwoWayBinding from './projects/reactformEvent/TwoWayBinding';
import ContextAPP from './projects/context API/ContextAPP';
import FechData from './FechData';
import OptimizeParent from './projects/performanceOptimizationHooks/OptimizeParent';
function App(props) {

  return (
    <>

      {/* project1 */}
      {/* <Parent /> */}
      {/* project2 */}
      {/* <UseStatePractice /> */}
      {/* <AppProjectB /> */}

      {/* <TwoWayBinding /> */}
      {/* <ContextAPP /> */}
      {/* <FechData /> */}

      <OptimizeParent />


    </>
  )
}

export default App;

// var [user, setUser] = useState({
//   name: "Anshu",
//   role: "Admin"
// })

// const changeRole = () => {
//   user.role = "user"
//   // setUser(user)    //can not update the state  we have to do mutate so always we have to create shallow copy of the object.
//   setUser({ ...user, role: user.role })  //reconsilision and diffing algorithem works, by creating copy of data it make changes and compair and update 

//   //let obj = {propertis}
//   //let newObj = {...obj} 
// }
{/* <button>
        <p>{user.role} </p>
        <button className="outline p-2 m-12" onClick={changeRole}>change role</button>
      </button> */}