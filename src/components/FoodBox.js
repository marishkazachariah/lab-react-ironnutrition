import React from 'react';
import { Card, Col, Button } from "antd";

export default function FoodBox(props) {
    const [ food, setRemoveFoodItem ] = props.food;

    const deleteFoodItem = item => {
        const removedItem = item
        setRemoveFoodItem(removedItem)
    }
    
    return (
        <Col>
            <Card title={food.name} style={{ width: 230, height: 300, margin: 10 }} >
            <img src={food.image} height={60} alt="food"/>
            <p>Calories: {food.calories}</p>
            <p>Servings: {food.servings}</p>
            <p>
                <b>Total Calories: {food.calories * food.servings} </b> kcal
            </p>
        <Button type="primary"  onClick={() => deleteFoodItem(food)}> Delete </Button>
            </Card>
        </Col>
    )
}