import './App.css';
import foods from "./foods.json";
import { useState } from "react";


function App() {
  const [foodList, setFood] = useState(foods);
  return (
    <div className="App">
      <h2>Food List</h2>
      {foodList.map((food) => {
        return (
          <div><p>{food.name}</p><img src={food.image} alt={food.name} width="70"/></div>  
        )
      })}
    </div>
  );
}

export default App;
