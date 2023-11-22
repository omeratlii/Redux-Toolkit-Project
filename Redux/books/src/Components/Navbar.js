import React from "react";
import { BsFillBasketFill } from "react-icons/bs";
import { useSelector } from "react-redux";

function Navbar() {
    // objeye ulaşıp property verdik.
  const { quantity } = useSelector((store) => store.cart);
  return (
    <nav>
      <div className="navbar">
        <h3>BookStore</h3>
        <div className="navDiv">
          <p>{quantity}</p>
          <BsFillBasketFill className="itemsIcon" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
