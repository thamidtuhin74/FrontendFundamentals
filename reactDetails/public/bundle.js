const HelloWorld = () =>{
    return React.createElement('p',{},"Hello Another.js")
};

const AnotherHelloWordl = () =>{
    return React.createElement('h2',{},"Anoter Hellow, Another.js");
};

// ---------- INstall REACT & REACTDOM Using CDN-----------
// console.log("Hello");
// console.log("React ==> ",React);
// console.log("React DOM ==> ",ReactDOM);

//App without JSX👇;
const App =  React.createElement(
    'h1',
    {style: {color:"red"}},
    "HEllo Root",
    HelloWorld(),
    AnotherHelloWordl()
    );




// const HelloWorld = () =>{
//     return <p>Hello World</p>
// }
// //App with JSX👇;
// const App = () =>{
//     return (
//         <React.Fragment>
//             <h1>Hello👋 This is A Simple Custom React App</h1>
//             <HelloWorld/>
//         </React.Fragment>
//     )
// }

// -------- Creating ROOT----
const root = ReactDOM.createRoot(document.getElementById("root"));


root.render(App);//Without JSX

// root.render(<App></App>);

console.log(root);