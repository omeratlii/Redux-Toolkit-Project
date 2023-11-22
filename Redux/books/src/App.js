import { useEffect } from "react";
import "./App.css";
import BookList from "./Components/BookList";
import Navbar from "./Components/Navbar";
import { calculateTotal } from "./control/cartSlice";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const { cartItems } = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems]);
  return (
    <div className="App">
      <Navbar />
      <BookList />
    </div>
  );
}

export default App;
