// functional based component

import React from 'react'
import Menu from './component/Menu'
import Navbar from './component/Navbar'

const App = () => {
    ///merging two objects
    // let users = {
    //     name: "HArsh",
    //     age: 26,
        
    // }
    //  let users1 = {
    //    designation: "Developer1",
    //    Company: "tyss1",
    // };
    // let obj = { ...users, ...users1 };
  return (
    <>
      {/* //function based */}
      {/* <Navbar username="Gobinandan" age={30} />  */}
      {/* //class based  */}
      {/* <Menu name="Harish" age={ 16}/> */}

      {/* sending data through spread operator */}
      {/* <Navbar {...obj} />
          <Menu {...obj}/> */}

      {/* passing inline object */}
      {/* <Navbar users={{name:"Harish",age:20,Designation:"Developer",company:"tyss"}} />
          <Menu jsp={{name:"abhiRajesh",age:45,Designation:"Goadalli CID 999",company:"Dr.Raj Kalavrunda"}}/> */}

      {/* sending array values through props */}
      {/* <Navbar arr={["Gobinandan","mille Rajesh","Harish"]} />
          <Menu Marr={ ["Lakmitech","pqr","abc"]}/> */}

      {/* sending boolean value as a prop */}

      {/* <Navbar isLoggedIn={true} /> */}
      <Menu isLoggedIn={true} />
    </>
  );
}

export default App