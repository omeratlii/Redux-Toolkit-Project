import React from "react";
import { useSelector, useDispatch } from "react-redux";
import BookItem from "./BookItem";
import { clearCart } from "../control/cartSlice";

function BookList() {
  const dispatch = useDispatch();
  const { cartItems, quantity, total } = useSelector((store) => store.cart);
  return (
    // quantity < 1 için ilk section çalışacak, eğer 1'den yüksek ise alttaki section çalışacak.
    <>
      {quantity < 1 ? (
        <section className="cart">
          <header>
            <h2>Cart</h2>
            <h4>empty</h4>
          </header>
        </section>
      ) : (
        <section className="cart">
          <header>
            <h2 className="cartTitle">Cart</h2>
          </header>
          <div>
            {cartItems.map((item) => {
              return <BookItem key={item.id} {...item} />;
            })}
          </div>
          <footer>
            <hr />
            <div>
              <h4>
                Total Price <span>{total}$</span>
              </h4>
            </div>
            <button className="cardClearButton" onClick={() => dispatch(clearCart())}>Clear</button>
          </footer>
        </section>
      )}
    </>
  );
}

export default BookList;
