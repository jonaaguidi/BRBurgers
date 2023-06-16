import Header_Cart from "../components/Header_Cart/Header_Cart"
import Menu_App from "../components/Menu_App/Menu_App";
import Footer from "../components/Footer/Footer"
import { CartProvider } from "../../src/context/CartContext";

const App = () => {
  return (
    <>
    <CartProvider>
      <Header_Cart />
      <Menu_App />
      <Footer />
    </CartProvider>
    </>
    
  )
}

export default App;