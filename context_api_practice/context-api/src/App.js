import React, { createContext } from 'react'
import ComA from './ComA'

const FirstName = createContext();
const App = () =>{
return <div>
    <FirstName.Provider value= {"Ananya"}> 
      <ComA /> 
    </FirstName.Provider>
  </div>

};

export default App;
export {FirstName};