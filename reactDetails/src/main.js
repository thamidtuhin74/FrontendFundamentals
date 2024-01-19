// ---------- INstall REACT & REACTDOM Using CDN-----------
// console.log("Hello");
// console.log("React ==> ",React);
// console.log("React DOM ==> ",ReactDOM);


import React from 'react';
import ReactDOM from 'react-dom/client'
import { HelloWorld } from "./another";
import { AnotherHelloWordl } from "./another";
//App without JSX👇;
// const App =  React.createElement(
//     'h1',
//     {style: {color:"red"}},
//     "HEllo Root",
//     HelloWorld(),
//     AnotherHelloWordl()
//     );




// const HelloWorld = () =>{
//     return <p>Hello World</p>
// }
//App with JSX👇;
const App = () =>{
    return (
        <React.Fragment>
            <h1>Hello👋 This is A Simple Custom React App</h1>
            <HelloWorld/>
            <AnotherHelloWordl/>
        </React.Fragment>
    )
}

// -------- Creating ROOT----
const root = ReactDOM.createRoot(document.getElementById("root"));


// root.render(App);//Without JSX

root.render(<App></App>);

console.log(root);