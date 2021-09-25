import { useState } from "react";
import foods from "./foods.json";
import "./App.css";
import { Row, Divider, Button } from "antd";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "antd/lib/transfer/search";

function App() {
  const [foodList, setFood] = useState(foods);

  const addNewFoodItem = newFoodItem =>{
    // console.log(newFoodItem);
    const updatedFood = [...foodList, newFoodItem];
    setFood(updatedFood);
  }

  const removeFoodItem = food => {
    const updatedList = foodList.filter((item) => {
      return item.name !== food.name;
    });
    setFood(updatedList);
  };

  const setSearchName = foodList.filter(food => {
    //return (!searchName ? true: `${food.name}`.toLowerCase().includes(searchName) )
  })

  const [hideForm, setHideForm] = useState(true)

  const handleHideBtn = () => setHideForm(true)
  const handleAddBtn = () => setHideForm(false);
  
  return (
    <div className="App">
     { hideForm ? (<Button className="btn" type="primary" ghost onClick={handleAddBtn}>Add New Food</Button>)
        :(<>
      <AddFoodForm addNewFoodItem={addNewFoodItem} />
      <Button className="btn" type="primary" ghost onClick={handleHideBtn}>Hide Form</Button> </>)}
      <Divider>Search</Divider>
      <Search setSearchName={setSearchName} />
      <Divider>Food List</Divider>
      <Row style={{ width: "100%", justifyContent: "center" }}>
      {foodList.length !== 0 ? (
        foodList.map((food) => {
          return (
            <FoodBox food={[food, removeFoodItem]} />
          )
        })
        ) : <h1>Ooops! There is no more content to show ∅</h1>
      }
      </Row>
    </div>
  );
}

export default App;
