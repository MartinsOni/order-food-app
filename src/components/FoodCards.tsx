import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addFood } from "../features/foodSlice";

interface FoodCardType {
  id: string;
  name: string;
  foods: string[];
}

const FoodCards = ({ id, name, foods }: FoodCardType) => {
  const dispatch = useDispatch();

  const [foodInput, setFoodInput] = useState("");

  const inputOrder = () => {
    if (!foodInput) return;
    dispatch(
      addFood({
        id,
        foods: foodInput,
      })
    );
    setFoodInput("");
  };

  
  return (
    <div className="customer-food-card-container">
      <div>
      <h1>{name}</h1>
      <div className="customer-foods-container">
        <div className="customer-food">
          {foods.map((food) => {
            return <p>{food}</p>;
          })} 
        </div>
        <div className="customer-food-input-container">
          <input placeholder="Enter order ....."
            value={foodInput}
            onChange={(event) => setFoodInput(event.target.value)}
          />
          <button className="foodButton" onClick={inputOrder}>Add Order</button>
        </div>
      </div>
      </div>
    </div>
  );
};

export default FoodCards;
