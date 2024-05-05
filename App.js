// const heading  = React.createElement("h1" ,  {id:'heading'} , "Hello World from React!!!")
const parent = React.createElement("div" ,  {id:'parent'} , React.createElement("div" ,  {id:'child'} , 
[React.createElement("h1" ,  {} , 'Hello from nested heading!!!!' ) , React.createElement("h2" ,  {} , 'Hello from nested heading Second!!!!' )] ) )
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(parent)