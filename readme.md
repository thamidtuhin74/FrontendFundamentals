# React Fundamentals

## Install React -  Using CDN ("https://unpkg.com/react@18.2.0/umd/react.production.min.js")

### Client side Rendering procedure of ReactJS
- Ceate a 'root' in HTML file
- React mainly return a Empty HTML file to a response
- then Using JavaScript , Load Component to the HTML 'root'
this is called Client side rendering.
- For browser rendering react use ReactDOM (# CDN -'https://unpkg.com/react-dom@18.2.0/umd/react-dom.production.min.js')

## Bable -  Install Bable Using CDN for using JSX ("https://unpkg.com/babel-standalone@6.26.0/babel.min.js)

### Bable translate JSX to Raw JS code for the Browser. Because Browser doesn't understand JSX .

## Modular Environment : Developer Friendly environment, where developer can code in multiple files. But It will minfie all the code for the User response.

- Crate Modular ENdvironment using Bundeller.
- Example of Bundeller : WebPack , RoolUp(vite)

### Install Rollup

- Global: <npm install --global rollup>
- Local: <npm install rollup --save-dev>
- run in cmd : <rollup main.js --file bundle.js --format esm>
- change HTML in script src "./main.js" to "./bundle.js"
