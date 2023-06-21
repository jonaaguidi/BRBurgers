import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Modal from "react-modal";
import { BsFillBackspaceFill } from "react-icons/bs";
import Form from "../Form/Form";
import "./CTA.css";

const Cta = () => {
    const { totalPrices } = useContext(CartContext);
    const [modalOpen, setModalOpen] = useState(false);

    const handleOpenModal = () => {
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
    };

    const customStyles = {
        content: {
            minWidth: "260px",
            maxWidth: "600px",
            margin: "0 auto",
            padding: "32px",
            borderRadius: "15px",
            maxHeight: "85vh"
        },
    };

    return (
        <div className="btn-cta">
            <button className="btn-total" onClick={handleOpenModal}>
                Envía tu pedido por WhatsApp - <span>${totalPrices}</span>
            </button>
            <Modal isOpen={modalOpen} onRequestClose={handleCloseModal} contentLabel="Opciones del Producto"
                style={customStyles}>
                <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center", paddingBottom: "12px", borderBottom: "2px solid black" }}>
                    <h5>📝👇👇</h5>
                    <BsFillBackspaceFill className='close_modal' onClick={handleCloseModal} />
                </div>
                <Form />
            </Modal>
        </div>
    );
};

export default Cta;
