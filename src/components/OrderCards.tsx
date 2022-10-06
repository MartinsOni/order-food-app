import React from "react";
import { useDispatch } from "react-redux";
import { addCustomer} from "../features/foodSlice";
import { removeOrder } from "../features/orderSlice";
import {v4 as uuid} from "uuid"

interface OrderCardsTypes {
  name: string;
  index: number;
 
}

const OrderCards = ({ name, index}: OrderCardsTypes) => {
  const dispatch = useDispatch();

  return (
    <div className="order-card-container"    
      onClick={() => {
        dispatch(removeOrder(index));
        dispatch(
          addCustomer({
            id: uuid(),
            name,
            foods: [],
          })
        );
      }}
     >
      <p>{name}</p>
    </div>
  );
};

export default OrderCards;
