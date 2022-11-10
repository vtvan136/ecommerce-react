import Header from "./components/Header";
import Home from "./pages/Home";
import ViewProduct from "./components/ViewProduct";
import Footer from "./components/Footer";
import Auth from "./pages/Auth";
import { Route, Routes } from "react-router-dom";
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";
import { AuthContextProvider } from "./store/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  /* */
  return (
    <>
      <AuthContextProvider>
        <ViewProduct />
        <Header />
        <Routes>
          <Route path="/ecommerce-react" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route
            path="/wish-list"
            element={
              <ProtectedRoute>
                {" "}
                <WishList />{" "}
              </ProtectedRoute>
            }
          />
          <Route
            path="/cart"
            element={
              <ProtectedRoute>
                {" "}
                <Cart />{" "}
              </ProtectedRoute>
            }
          />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;
