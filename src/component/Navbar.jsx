///props using functional based

// import React from 'react'

// const Navbar = (props) => {         /////{username,age}inside call back function
  // destructuring method
  // let{username,age}=props
    // inline object destructure
    // let { name, age, Designation, company }=props.users
//   return (
    //   normal method
    //   <h1>My friend name is {props.username} and his age is {props.age}</h1>

    // destructuring method
    // <h1>
    //   My name is {name} and my age is {age} working is {company} company and my designation is {Designation}
    // </h1>
      
    //   passig values in an
//   );
// }

// export default Navbar.


////////boolean mehod
import React from 'react'

const Navbar = (props) => {
    if(props.isLoggedIn===true){
  return (
      <>
          <li>login</li>
      </>
  )
    }
    else {
        return (
          <>
            <li>logout</li>
          </>
        );
    }
    
}

export default Navbar