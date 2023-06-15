import { useState } from 'react';
import { BsFillCheckCircleFill } from 'react-icons/bs';
import { BsFillBackspaceFill } from "react-icons/bs";
import Modal from 'react-modal';
import './Product_card.css';

const Product_card = ({ name, description, price, extras }) => {
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
      maxHeight: "fit-content"
    },
  };

  return (
    <>
      <div className="card">
        <h6>
          <BsFillCheckCircleFill
            style={{ color: 'white', marginRight: '8px', marginBottom: '2px' }}
          />
          {name}
        </h6>
        <p>{description}</p>
        <p>Desde <strong>${price}</strong></p>
        <button onClick={openModal}>Añadir al carrito</button>
      </div>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Opciones del Producto"
        style={customStyles}
      >
        <div style={{ display: 'flex', justifyContent: "space-between", alignItems: "center", paddingBottom: "12px", borderBottom: "2px solid black" }}>
          <h3>Elija una Opción</h3>
          <BsFillBackspaceFill onClick={closeModal} style={{ transform: "scale(2.0)", cursor: "pointer", color: "darkred" }} />
        </div>
        <div>
            <div className='btn-container_extras'>
              {extras}
            </div>
        </div>
      </Modal>
    </>
  );
};

export default Product_card;

