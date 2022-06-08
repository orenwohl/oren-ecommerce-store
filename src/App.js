import Home from "./routes/home/home";
import { Route, Routes, Outlet } from "react-router-dom";
import NavBar from "./routes/navigation/navigation";
import Shop from "./routes/shop/shop_component";
import Authentication from "./routes/authentication/authentication-component";
import Checkout from "./routes/checkout/checckout_component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<NavBar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
