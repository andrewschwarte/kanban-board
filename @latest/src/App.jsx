import { useState } from "react"; //useState is a React hook used to manage state
import "./styles.css"; //Importing the styles you previously had in style.css

// Defining the App component - this is the main part of your React application
export default function App() {
  const [items, setItems] = useState([1, 2]);

  const remove = () => {
    if (items.length > 0) {
      setItems(items.slice(0, -1));
    }
  };

  const add = () => {
    setItems([...items, items.length + 1]);
  };

  return (
    // JSX Syntax; JSX is similar to HTML but can also include JavaScript expressions

    <div>
      <h1>My Grocery List</h1>
      <ul>
        {items.map((num) => (
          <li key={num}></li>
        ))}
      </ul>
      <button onClick={remove}>Remove</button>
      <button onClick={add}>Add</button>
    </div>
  );
}
