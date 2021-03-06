import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [items, setItems] = useState(itemData);
  const [mode, setMode] = useState(false)

  function handleDMClick() {
    setMode((mode) => !mode)
  }

  // this data will be passed down to the ShoppingList as a prop
  console.log(items);

  return (
    <div className={"App " + (mode ? "dark" : "light")}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDMClick}>{mode ? "Dark" : "Light"}</button>
      </header>
      <ShoppingList items={items} />
    </div>
  );
}

export default App;
