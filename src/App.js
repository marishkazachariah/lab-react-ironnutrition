import { useState } from "react";
import foods from "./foods.json";
import "./App.css";
import { Row, Divider, Button } from "antd";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";

function App() {
  const [foodList, setFood] = useState(foods);

  const addNewFoodItem = newFoodItem =>{
   
    const updatedFood = [...foodList, newFoodItem];
    setFood(updatedFood);
  }

  const removeFoodItem = (food) => {
    const updatedList = foodList.filter((item) => {
      return item.name !== food.name;
    });
    setFood(updatedList);
  };

  return (
    <div className="App">
      <Divider>Food List</Divider>
      <AddFoodForm addFood={addNewFoodItem} />
      <Row style={{ width: "100%", justifyContent: "center" }}>
        {foodList.map((food) => {
          return <FoodBox food={[food, removeFoodItem]} />;
        })}
      </Row>
    </div>
  );
}

export default App;
