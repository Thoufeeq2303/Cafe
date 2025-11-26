import React from "react";

// class Per extends React.Component{
//     render(){
//         return(
//         <>
//         <h1>this is react javascript</h1>
//         </>
//         )
//     }
// }
// export default Per

//state

class Per extends React.Component{
    constructor(){
        super()
        this.count = {
            name:"riyaz",
            age:25,
            address:"india"
        }
        this.setcount = {
            name: "Safik"
        }
    }
    render(){
        return(
        <>
        <h1>this is react js</h1>
        <h3>{this.setcount.name} and {this.count.age} and {this.count.address}</h3>
        </>
        )
    }
}
export default Per