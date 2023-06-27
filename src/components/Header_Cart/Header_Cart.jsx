import { useState } from "react";
import Modal from "react-modal";
import logo from "../../assets/imgs/logotype.png";
import "./Header_Cart.css";
import { BsFillBackspaceFill, BsFillCartFill, BsFillCheckCircleFill, BsFillTrashFill } from "react-icons/bs";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import Cta from "../CTA/CTA";

const Header_Cart = () => {

    const { cartItems, totalAmount, clearCart } = useContext(CartContext);

    const [modalIsOpen, setModalIsOpen] = useState(false);
    const openModal = () => {
        setModalIsOpen(true);
    };
    const closeModal = () => {
        setModalIsOpen(false);
    };

    const customStyles = {
        content: {
            backgroundColor: "var(--secondary-color)",
            minWidth: "260px",
            maxWidth: "700px",
            margin: "0 auto",
            padding: "24px",
            borderRadius: "15px",
            maxHeight: "70vh",
            color: "white"
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
                <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center", paddingBottom: "8px", marginBottom: "16px", borderBottom: "2px solid white" }}>
                    <h5>Tu Pedido 🛒👇</h5>
                    <BsFillBackspaceFill className='close_modal' onClick={closeModal} />
                </div>
                {cartItems.length === 0 ? (
                    <div>Tu carrito está vacío ...</div>
                ) : (
                    <>
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
                        <div className="btn-modal_container">
                            <Cta />
                            <button onClick={clearCart} className="btn-clearCart"> <BsFillTrashFill /> Vaciar el Carrito </button>
                        </div>
                    </>
                )}
            </Modal>

        </nav>
    );
};

export default Header_Cart;


