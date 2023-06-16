import logo from "../../assets/imgs/logotype.png";
import "./Header_Cart.css";
import { BsFillCartFill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Header_Cart = () => {

    const { cartItems } = useContext(CartContext);
    const totalAmount = cartItems.reduce((total, product) => total + product.amount, 0);

    return (
        <nav id="header-navbar" className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-xxl">
                <a className="navbar-brand" href="/">
                    <img className="br-logo" src={logo} alt="BR-Burgers" width="128px" />
                </a>
                <div className="cart" id="cart">
                    <BsFillCartFill style={{transform:"scale(1.2)"}}/>
                    <span>{totalAmount}</span>
                </div>
            </div>
        </nav>
    );
};

export default Header_Cart;
