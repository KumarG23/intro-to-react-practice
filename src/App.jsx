import { Link } from "react-router-dom"
import { useState } from "react";

const Title = () => {
  return (
    <h1 className="text-center pt-5" style={{color: "#3d52a0"}}>
      Hello World!
    </h1>
  )
}

// const changeColor = () => {
//   let colors = ['#6c52ad', '#cc58d6', '#483396', '#fe66a2', '#fe66a2']
//    let randomColor = colors[Math.floor((Math.random() * colors.length))]
//    console.log(randomColor);
//    return randomColor
// }


function App() {

  const changeColor = () => {
    let colors = ['#6c52ad', '#cc58d6', '#483396', '#fe66a2', '#fe66a2']
     let randomColor = colors[Math.floor((Math.random() * colors.length))]
     console.log(randomColor);
     return randomColor
  }

  let color = '#6c52ad';
   
  
  let [count, setCount] = useState(0);
   const increase = () => setCount(() => count + 1);
   const decrease = () => setCount(() => count - 1);
   if (count > 10) {
  alert('Too much clicking')
}
  
  return (
    <div className="h-100"
    style={{background: 'linear-gradient(#ede8f5, #7091e6)'}}>
      <div 
        className=""
        //style={{ background: 'linear-gradient(#e66465, #9198e5)'}}
      >
        <Link className="text-start"
        style={{color: '#8697c4'}} to='/about'>About</Link>
        <br></br>
        <Link className="text-start"
        style={{color: '#8697c4'}} to='/Contacts'>Contacts</Link>
        <Title />
      </div>
      <div className="text-center">
        <button className="counterBtn mt-2 ms-2 btn-lg"
        style={{background: '#debbf0'}} onClick={() => {
          increase();
          changeColor();}}>Increase+</button>
          <button className="decreaseBtn mt-2 ms-2 btn-lg"
          style={{background: '#debbf0'}} onClick={() => {
            decrease();
            changeColor();
          }}>Decrease-</button>
        <br></br>
        <p className="p-3 fw-bold fs-3"
        style={{color: changeColor()}}>{count}
        </p>
      </div>
    </div>
  )
}


export default App
