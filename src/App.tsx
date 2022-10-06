import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { RootState } from "./app/store";
import FoodCards from "./components/FoodCards";
import OrderCards from "./components/OrderCards";
import { addOrder } from "./features/orderSlice";

function App() {
  const dispatch = useDispatch();

  const [orderInput, setOrderInput] = useState("");

  const orders = useSelector((state: RootState) => state.orders.value);
  const food = useSelector((state: RootState) => state.foods.value);

  const handleOrder = () => {
    if (!orderInput) return;
    dispatch(addOrder(orderInput));
    setOrderInput("");
  }; 

  return (
    <div className="App">
      <h1 className="order">🍲 ORDER LIST APP USING REACT-REDUX</h1>
      <div className="container"> 
        <div className="order-container">
          <div>
            <h1 className="order-header">Customer Name</h1>
            <div className="order-cards-container">
              <div className="name">
                {orders.map((name, index) => {
                  return<OrderCards name={name} index={index} />;
                })}
              </div>
            </div>
          </div>
          <div className="order-input-container">
            <input placeholder="Enter your full name please......"
              value={orderInput}
              onChange={(event) => setOrderInput(event.target.value)}
            />
            <button onClick={handleOrder}>Add Name</button>
          </div>
        </div>
        
        <div className="customer-food-container">
          <h1 className="food-header">🍽  CUSTOMER ORDER</h1>
          {food.map((customer) => {
            return (
              <FoodCards 
                id={customer.id}
                name={customer.name}
                foods={customer.foods}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
