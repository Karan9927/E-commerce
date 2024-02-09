import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop/Shop";
import Item from "./Components/Shop/Item";
import Footer from "./Components/Footer/Footer";
import About from "./Components/Sections/About";
import Checkout from "./Pages/Checkout/Checkout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./Pages/Home/Home";
import ProductState from "./Context/productState";
import Dashboard from "./Pages/Admin/Dashboard";
import Orders from "./Pages/Orders/Orders";

function App() {
  return (
    <ProductState>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/shop/:itemId" element={<Item />} />
          <Route
            path="/Admin"
            element={
              <ProtectedRouteForAdmin>
                <Dashboard />
              </ProtectedRouteForAdmin>
            }
          />
          <Route
            path="/Orders"
            element={
              <ProtectedRoute>
                <Orders />
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
        <ToastContainer />
      </BrowserRouter>
    </ProductState>
  );
}

export default App;

const ProtectedRoute = ({ children }) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
};

const ProtectedRouteForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));

  if (admin.user.email === "karan@gmail.com") {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
};
