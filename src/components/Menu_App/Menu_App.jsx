import './Menu_App.css';
import { useContext, useState } from 'react';
import { BsFillCaretDownSquareFill } from 'react-icons/bs';
import Product_card from '../Product_card/Product_card';
import { CartContext } from "../../context/CartContext";
import { burgersSimples } from '../../Data/burgersSimples';
import { burgersDobles } from '../../Data/burgersDobles';
import { burgersVeggies } from '../../Data/burgersVeggies';
import { postres } from '../../Data/postres';
import { bebidas } from '../../Data/bebidas';
import { salsas } from '../../Data/salsas';
import { entradas } from '../../Data/entradas';
import Cta from "../CTA/CTA"

const Menu_App = () => {
    const { addProductsToCart, cartItems } = useContext(CartContext);

    {/* Estados de Dropdowns*/ }
    const [DropdownBurgersOpen, setDropdownBurgersOpen] = useState(false);
    const [showBurgerSimples, setShowBurgerSimples] = useState(false);
    const [showBurgerDobles, setShowBurgerDobles] = useState(false);
    const [showBurgerVeggies, setShowBurgerVeggies] = useState(false);
    const [showEntradas, setShowEntradas] = useState(false);
    const [showSalsas, setShowSalsas] = useState(false);
    const [showBebidas, setShowBebidas] = useState(false);
    const [showPostres, setShowPostres] = useState(false);

    {/* Manejadores para mostrar/ocultar los dropdowns */ }
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
                                        extras={burger.extras.map((extra, i) => (
                                            <button className='btn_extras' onClick={() => { addProductsToCart(burger, extra); }} key={i}>{extra.name} - <span>${extra.price}</span></button>
                                        ))}
                                    />
                                ))}
                            </div>



                            <div id="menu-dropdowns_subItem_2" className="menu-dropdowns_subItem" onClick={handleShowBurgerDobles}>
                                <p className="menu-dropdowns_text">Dobles - Triples</p>
                                <BsFillCaretDownSquareFill className={`icon_dropdowns ${showBurgerDobles ? 'rotate' : ''}`} />
                            </div>
                            <div id="burgers-dobles" className={showBurgerDobles ? 'show' : 'hide'}>
                                {burgersDobles.map((burger, index) => (
                                    <Product_card
                                        key={index}
                                        name={burger.name}
                                        description={burger.description}
                                        price={burger.price}
                                        extras={burger.extras.map((extra, i) => (
                                            <button className='btn_extras' onClick={() => addProductsToCart(burger, extra)} key={i}>{extra.name} - <span>${extra.price}</span></button>
                                        ))}
                                    />
                                ))}
                            </div>


                            <div id="menu-dropdowns_subItem_3" className="menu-dropdowns_subItem" onClick={handleshowBurgerVeggies}>
                                <p className="menu-dropdowns_text">Veggies</p>
                                <BsFillCaretDownSquareFill className={`icon_dropdowns ${showBurgerVeggies ? 'rotate' : ''}`} />
                            </div>
                            <div id="burgers-veggies" className={showBurgerVeggies ? 'show' : 'hide'}>
                                {burgersVeggies.map((burger, index) => (
                                    <Product_card
                                        key={index}
                                        name={burger.name}
                                        description={burger.description}
                                        price={burger.price}
                                        extras={burger.extras.map((extra, i) => (
                                            <button className='btn_extras' onClick={() => addProductsToCart(burger, extra)} key={i}>{extra.name} - <span>${extra.price}</span></button>
                                        ))}
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
                        {entradas.map((entrada, index) => (
                            <Product_card
                                key={index}
                                name={entrada.name}
                                description={entrada.description}
                                price={entrada.price}
                                extras={entrada.options.map((option, i) => (
                                    <button className='btn_extras' onClick={() => addProductsToCart(entrada, option)} key={i}>{option.name} - <span>${option.price}</span></button>
                                ))}
                            />
                        ))}
                    </div>


                    <div id="salsas-container" className="menu-dropdowns_item" onClick={handleshowSalsas}>
                        <p className="menu-dropdowns_text">Salsas 💦</p>
                        <BsFillCaretDownSquareFill className={`icon_dropdowns ${showSalsas ? 'rotate' : ''}`} />
                    </div>
                    <div id="salsas" className={showSalsas ? "show" : "hide"}>
                        {salsas.map((salsa, index) => (
                            <Product_card
                                key={index}
                                name={salsa.name}
                                description={salsa.description}
                                price={salsa.price}
                                extras={salsa.options.map((option, i) => (
                                    <button className='btn_extras' onClick={() => addProductsToCart(salsa, option)} key={i}>{option.name}</button>
                                ))}
                            />
                        ))}
                    </div>


                    <div id="bebidas-container" className="menu-dropdowns_item" onClick={handleshowBebidas}>
                        <p className="menu-dropdowns_text">Bebidas 🥤🍺</p>
                        <BsFillCaretDownSquareFill className={`icon_dropdowns ${showBebidas ? 'rotate' : ''}`} />
                    </div>
                    <div id="bebidas" className={showBebidas ? "show" : "hide"}>
                        {bebidas.map((bebida, index) => (
                            <Product_card
                                key={index}
                                name={bebida.name}
                                description={bebida.description}
                                price={bebida.price}
                                extras={bebida.options.map((option, i) => (
                                    <button className="btn_extras" onClick={() => addProductsToCart(bebida, option)} key={i}>
                                        {option.name}
                                    </button>
                                ))}
                            />
                        ))}
                    </div>


                    <div id="postres-container" className="menu-dropdowns_item" onClick={handleshowPostres}>
                        <p className="menu-dropdowns_text">Postres 🍦</p>
                        <BsFillCaretDownSquareFill className={`icon_dropdowns ${showPostres ? 'rotate' : ''}`} />
                    </div>
                    <div id="postres" className={showPostres ? "show" : "hide"}>
                        {postres.map((postre, index) => (
                            <Product_card
                                key={index}
                                name={postre.name}
                                description={postre.description}
                                price={postre.price}
                                extras={postre.options.map((option, i) => (
                                    <button className='btn_extras' onClick={() => addProductsToCart(postre, option)} key={i}>{option.name}</button>
                                ))}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {cartItems.length === 0 ? null : <Cta /> }
        </div>
    );
};

export default Menu_App;


