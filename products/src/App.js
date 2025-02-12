import { useState } from "react";
import Nav from "./components/Nav";
import AllProducts from "./AllProducts";
import ShowProducts from "./components/ShowProducts"
function App() {
  let [category, setCategory] = useState('all');
  return (
    <>
      <Nav setCategory={setCategory} />
      <ShowProducts products={category === "all" ? AllProducts : AllProducts.filter(p => p.category === category)} />
    </>
  );
}

export default App;
