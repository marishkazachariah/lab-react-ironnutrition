import React from "react";
import { Button, Divider, Input } from "antd";
import { useState } from "react";
import { v4 as uuid } from 'uuid';

export default function AddFoodForm(props) {
  const [foodName, setFoodName] = useState("");
  const [foodImg, setFoodImg] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleFoodNameChange = (event) => setFoodName(event.target.value);
  const handleFoodImgChange = (event) => setFoodImg(event.target.value);
  const handleCaloriesChange = (event) => setCalories(event.target.value);
  const handleServingsChange = (event) => setServings(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFoodItem = { foodName, foodImg, calories, servings,  _id: uuid() };
    props.addFood(newFoodItem);
    setFoodName("");
    setFoodImg("");
    setCalories(0);
    setServings(0);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>
        <label htmlFor="foodName">Name</label>
        <Input
          value={foodName}
          type="text"
          name="foodName"
          id="foodName"
          onChange={handleFoodNameChange}
        />
        <label htmlFor="foodImg">Image</label>
        <Input
          value={foodImg}
          type="text"
          name="foodImg"
          id="foodImg"
          onChange={handleFoodImgChange}
        />
        <label htmlFor="calories">Calories</label>
        <Input
          value={calories}
          type="number"
          name="calories"
          id="calories"
          onChange={handleCaloriesChange}
        />
        <label htmlFor="foodName">Servings</label>
        <Input
          value={servings}
          type="number"
          name="servings"
          id="servings"
          onChange={handleServingsChange}
        />
        <Button type="submit">Create</Button>
      </form>
    </div>
  );
}
