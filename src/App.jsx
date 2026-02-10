import './App.css'
import UseStatePractice from './projects/learnUseStateHook/UseStatePractice'
import { Parent } from './projects/prop-drilling/components/Parent'
import { AppProjectB } from './projects/learnUseStateHook/projectB/components/AppProjectB';
import { useState } from 'react';
import TwoWayBinding from './projects/reactformEvent/TwoWayBinding';
function App(props) {

  return (
    <>
      {/* project1 */}
      {/* <Parent /> */}
      {/* project2 */}
      {/* <UseStatePractice /> */}
      <AppProjectB />

      <TwoWayBinding />

    </>
  )
}

export default App;
