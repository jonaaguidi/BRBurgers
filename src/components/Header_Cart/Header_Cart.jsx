import { useState } from "react";
import Modal from "react-modal";
import logo from "../../assets/imgs/logotype.png";
import "./Header_Cart.css";
import { BsFillBackspaceFill, BsFillCartFill, BsFillCheckCircleFill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Header_Cart = () => {

    const { cartItems } = useContext(CartContext);
    const totalAmount = cartItems.reduce(
        (total, product) => total + product.amount,
        0
    );

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };

    const customStyles = {
        content: {
            minWidth: "260px",
            maxWidth: "600px",
            margin: "0 auto",
            padding: "24px",
            borderRadius: "15px",
            maxHeight: "80vh"
        },
    };

    return (
        <nav id="header-navbar" className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-xxl">
                <a className="navbar-brand" href="/">
                    <img
                        className="br-logo"
                        src={logo}
                        alt="BR-Burgers"
                        width="128px"
                    />
                </a>
                <div className="cart" id="cart" onClick={openModal}>
                    <BsFillCartFill style={{ transform: "scale(1.2)" }} />
                    <span>{totalAmount}</span>
                </div>
            </div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Cart Modal"
                style={customStyles}
            >
                <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center", paddingBottom: "8px", marginBottom: "16px", borderBottom: "2px solid black" }}>
                    <h5>Tu Pedido 🛒</h5>
                    <BsFillBackspaceFill className='close_modal' onClick={closeModal} />
                </div>
                {cartItems.length === 0 ? (
                    <div>Tu carrito está vacío ...</div>
                ) : (
                    <div>
                        {cartItems.map((item) => (
                            <div className="items_cart" key={item.id}>
                                <h6>
                                    <BsFillCheckCircleFill
                                        style={{ color: 'white', marginRight: '6px', marginBottom: '2px' }}
                                    />
                                    {item.amount}x - {item.name}
                                </h6>
                                <div className="items_cart_options">
                                    {item.options.map((option) => (
                                        <div key={option.name}>
                                            <span>{option.amount}x</span> - {option.name} = <span style={{ borderBottom: "1px solid" }}>${option.amount * option.price}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </Modal>

        </nav>
    );
};

export default Header_Cart;


