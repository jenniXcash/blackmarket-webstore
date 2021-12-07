import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home";
import SingleProductDescPage from "./Pages/SingleProductDescPage/SingleProductDescPage";
function App() {
  return (
    <React.Fragment>
      <div className="links">
        <Link to="/">Home</Link>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/SingleProductDescPage"
          element={<SingleProductDescPage />}
        />
      </Routes>
    </React.Fragment>
  );
}

export default App;
