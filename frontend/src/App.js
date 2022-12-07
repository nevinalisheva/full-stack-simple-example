import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Products } from "./pages/products";
import { SingleProduct } from "./pages/products/single-product";
import { Categories } from "./pages/categories/index";
import { Navbar } from "./components/navbar";
import { Images } from "./pages/images";
import { Home } from "./pages/home";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
        </Route>
        <Route path="products">
          <Route index element={<Products />} />
          <Route path=":id" element={<SingleProduct />} />
        </Route>
        <Route path="/categories" element={<Categories />} />
        <Route path="images">
          <Route index element={<Images />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
