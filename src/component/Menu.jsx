///class based components
// import React, { Component } from 'react'

// export default class Menu extends Component {
//     render() {
        //destructuring method
    //   let{name,age}=this.props
        
        // object destructuring by using inline
        // let {name, age, designation, Company}=this.props.jsp
    //   return (
        // normal method
        // <h1>my name is {name} and my age is {age}</h1>

        //   destructuring method
        //   <h1>my name is {name} my age is { age}</h1>

        ////object destructuring using spread operator
        // <h1>
        //   My name is {name} and my age is {age} working is {Company} company and
        //   my designation is {designation}
        // </h1>
          
        //   inline array method
        //   <>{this.props.Marr.map(x => {
        //       return (
        //         <>
        //           <li>{x}</li>
        //         </>
        //       );
        //   })}
        //   </>
//       )
//   }
// }

///boolean for class

import React, { Component } from 'react'

export default class Menu extends Component {
    render() {
      if(this.props.isLoggedIn===false){
    return (
        <>
            <li>register</li>
        </>
    )
        }
      else {
          return (
              <>
                  <li>out</li>
              </>
          )
        }
  }
}

