import React, {useState} from "react";

function Item({ name, category }) {

  const [cart, setCart] = useState(false)

  function addToCard() {
    setCart((cart) => !cart)
  }

  return (
    <li className={cart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCard} className={cart ? "remove" : "add"}>{cart ? "Remove From" : "Add to"} Cart</button>
    </li> 
  );
}

export default Item;
