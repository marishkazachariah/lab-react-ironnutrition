import React from "react";
import { Divider, Input } from "antd";
import { useState } from "react";
// import { v4 as uuid } from 'uuid';

export default function AddFoodForm(props) {
  const [name, setFoodName] = useState("");
  const [image, setFoodImg] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleFoodNameChange = (event) => setFoodName(event.target.value);
  const handleFoodImgChange = (event) => setFoodImg(event.target.value);
  const handleCaloriesChange = (event) => setCalories(event.target.value);
  const handleServingsChange = (event) => setServings(event.target.value);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newFoodItem = { name, image, calories, servings };
    console.log(newFoodItem);
    props.addNewFoodItem(newFoodItem);
    setFoodName("");
    setFoodImg("");
    setCalories(0);
    setServings(0);
  };

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <Divider>Add Food Entry</Divider>
        <label>Name</label>
        <Input
          value={name}
          type="text"
          name="foodName"
          id="foodName"
          onChange={handleFoodNameChange}
        />
        <label>Image</label>
        <Input
          value={image}
          type="text"
          name="foodImg"
          id="foodImg"
          onChange={handleFoodImgChange}
        />
        <label>Calories</label>
        <Input
          value={calories}
          type="number"
          name="calories"
          id="calories"
          onChange={handleCaloriesChange}
        />
        <label>Servings</label>
        <Input
          value={servings}
          type="number"
          name="servings"
          id="servings"
          onChange={handleServingsChange}
        />
        <button type="submit">Create</button>
        </form>
    </div>
  );
}
