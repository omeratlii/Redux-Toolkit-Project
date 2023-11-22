import React from "react";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { increase, removeItem, decrease } from "../control/cartSlice";

function BookItem({ id, title, price, img, quantity }) {
  const dispatch = useDispatch();
  return (
    <div className="cartItem">
      <img className="cartImage" src={img} alt="" />
      <div className="cartInfo">
        <h4>{title}</h4>
        <h4>{price}$</h4>
        <div>
          <button className="cartQuantityButton" onClick={() => {dispatch(increase(id))}}>
            <FaChevronUp />
          </button>
          <p className="cartQuantity">{quantity}</p>
          <button className="cartQuantityButton" onClick={() => {dispatch(decrease(id))}}>
            <FaChevronDown />
          </button>
        </div>
        <button
          className="cartDeleteButton"
          onClick={() => {
            dispatch(removeItem(id));
          }}
        >
          Clear
        </button>
      </div>
    </div>
  );
}

export default BookItem;
