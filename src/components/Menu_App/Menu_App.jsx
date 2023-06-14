import './Menu_App.css';
import { useState } from 'react';
import { BsFillCaretDownSquareFill } from 'react-icons/bs';
import { burgersSimples } from '../../Data/burgersSimples';
import Product_card from '../Product_card/Product_card';

const Menu_App = () => {

    {/* Estados de Dropdowns*/}
    const [DropdownBurgersOpen, setDropdownBurgersOpen] = useState(false);
    const [showBurgerSimples, setShowBurgerSimples] = useState(false);
    const [showBurgerDobles, setShowBurgerDobles] = useState(false);
    const [showBurgerVeggies, setShowBurgerVeggies] = useState(false);
    const [showEntradas, setShowEntradas] = useState(false);
    const [showSalsas, setShowSalsas] = useState(false);
    const [showBebidas, setShowBebidas] = useState(false);
    const [showPostres, setShowPostres] = useState(false);

    {/* Manejadores para mostrar/ocultar los dropdowns */}
    const handleDropdownToggle = () => {
        setDropdownBurgersOpen(!DropdownBurgersOpen);
    };
    const handleShowBurgerSimples = () => {
        setShowBurgerSimples(!showBurgerSimples);
    };
    const handleShowBurgerDobles = () => {
        setShowBurgerDobles(!showBurgerDobles);
    };
    const handleshowBurgerVeggies = () => {
        setShowBurgerVeggies(!showBurgerVeggies);
    };
    const handleshowEntradas = () => {
        setShowEntradas(!showEntradas);
    };
    const handleshowSalsas = () => {
        setShowSalsas(!showSalsas);
    };
    const handleshowBebidas = () => {
        setShowBebidas(!showBebidas);
    };
    const handleshowPostres = () => {
        setShowPostres(!showPostres);
    };

    return (

        <div className="menu-app" id="menu-app">
            <h3 className="menu-title">👇 Hace tu pedido AQUI 👇</h3>
            <div className="menu-dropdowns">
                <div className="menu-dropdowns_container">
                    <div id="burgers-container" className={`menu-dropdowns_item ${DropdownBurgersOpen ? 'active' : ''}`} onClick={handleDropdownToggle}>
                        <p className="menu-dropdowns_text">Burgers 🍔</p>
                        <BsFillCaretDownSquareFill className={`icon_dropdowns ${DropdownBurgersOpen ? 'rotate' : ''}`} />
                    </div>


                    {DropdownBurgersOpen && (

                        <>
                            <div id="menu-dropdowns_subItem_1" className="menu-dropdowns_subItem" onClick={handleShowBurgerSimples}>
                                <p className="menu-dropdowns_text">Simples</p>
                                <BsFillCaretDownSquareFill className={`icon_dropdowns ${showBurgerSimples ? 'rotate' : ''}`} />
                            </div>
                            <div id="burgers-simples" className={showBurgerSimples ? 'show' : 'hide'}>
                                {burgersSimples.map((burger, index) => (
                                    <Product_card
                                        key={index}
                                        name={burger.name}
                                        description={burger.description}
                                        price={burger.price}
                                    />
                                ))}
                            </div>


                            <div id="menu-dropdowns_subItem_2" className="menu-dropdowns_subItem" onClick={handleShowBurgerDobles}>
                                <p className="menu-dropdowns_text">Dobles - Triples</p>
                                <BsFillCaretDownSquareFill className={`icon_dropdowns ${showBurgerDobles ? 'rotate' : ''}`} />
                            </div>
                            <div id="burgers-dobles" className={showBurgerDobles ? 'show' : 'hide'}>
                            {burgersSimples.map((burger, index) => (
                                    <Product_card
                                        key={index}
                                        name={burger.name}
                                        description={burger.description}
                                        price={burger.price}
                                    />
                                ))}
                            </div>


                            <div id="menu-dropdowns_subItem_3" className="menu-dropdowns_subItem" onClick={handleshowBurgerVeggies}>
                                <p className="menu-dropdowns_text">Veggies</p>
                                <BsFillCaretDownSquareFill className={`icon_dropdowns ${showBurgerVeggies ? 'rotate' : ''}`} />
                            </div>
                            <div id="burgers-veggies" className={showBurgerVeggies ? 'show' : 'hide'}>
                            {burgersSimples.map((burger, index) => (
                                    <Product_card
                                        key={index}
                                        name={burger.name}
                                        description={burger.description}
                                        price={burger.price}
                                    />
                                ))}
                            </div>
                        </>

                    )}


                    <div id="entradas-container" className="menu-dropdowns_item" onClick={handleshowEntradas}>
                        <p className="menu-dropdowns_text">Entradas 🍟</p>
                        <BsFillCaretDownSquareFill className={`icon_dropdowns ${showEntradas ? 'rotate' : ''}`} />
                    </div>
                    <div id="entradas" className={showEntradas ? 'show' : 'hide'}>
                            {burgersSimples.map((burger, index) => (
                                    <Product_card
                                        key={index}
                                        name={burger.name}
                                        description={burger.description}
                                        price={burger.price}
                                    />
                                ))}
                    </div>


                    <div id="salsas-container" className="menu-dropdowns_item" onClick={handleshowSalsas}>
                        <p className="menu-dropdowns_text">Salsas 💦</p>
                        <BsFillCaretDownSquareFill className={`icon_dropdowns ${showSalsas ? 'rotate' : ''}`} />
                    </div>
                    <div id="salsas" className={showSalsas ? "show" : "hide"}>
                        {burgersSimples.map((burger, index) => (
                                <Product_card
                                     key={index}
                                     name={burger.name}
                                     description={burger.description}
                                    price={burger.price}
                                />
                            ))}        
                    </div>


                    <div id="bebidas-container" className="menu-dropdowns_item" onClick={handleshowBebidas}>
                        <p className="menu-dropdowns_text">Bebidas 🥤🍺</p>
                        <BsFillCaretDownSquareFill className={`icon_dropdowns ${showBebidas ? 'rotate' : ''}`} />
                    </div>
                    <div id="bebidas" className={showBebidas ? "show" : "hide"}>
                        {burgersSimples.map((burger, index) => (
                                <Product_card
                                     key={index}
                                     name={burger.name}
                                     description={burger.description}
                                    price={burger.price}
                                />
                            ))} 
                    </div>


                    <div id="postres-container" className="menu-dropdowns_item" onClick={handleshowPostres}>
                        <p className="menu-dropdowns_text">Postres 🍦</p>
                        <BsFillCaretDownSquareFill className={`icon_dropdowns ${showPostres ? 'rotate' : ''}`} />
                    </div>
                    <div id="postres" className={showPostres ? "show" : "hide"}>
                        {burgersSimples.map((burger, index) => (
                                <Product_card
                                     key={index}
                                     name={burger.name}
                                     description={burger.description}
                                    price={burger.price}
                                />
                            ))} 
                    </div>


                </div>
            </div>
        </div>
    );
};

export default Menu_App;


