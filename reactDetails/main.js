// ---------- INstall REACT & REACTDOM Using CDN-----------
// console.log("Hello");
// console.log("React ==> ",React);
// console.log("React DOM ==> ",ReactDOM);


// -------- Creating ROOT----

const App =  React.createElement('h1',{style: {color:"red"}},"HEllo Root")

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(App);

console.log(root);