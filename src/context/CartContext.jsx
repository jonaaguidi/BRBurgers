import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const productsInSessionStorage = sessionStorage.getItem("cartProducts");
      return productsInSessionStorage
        ? JSON.parse(productsInSessionStorage)
        : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    sessionStorage.setItem("cartProducts", JSON.stringify(cartItems));
  }, [cartItems]);

  const addProductsToCart = (product, option) => {
    const inCart = cartItems.find((productInCart) => productInCart.id === product.id);

    if (inCart) {
      const updatedOptions = inCart.options.map((existingOption) => {
        if (existingOption.name === option.name) {
          return { ...existingOption, amount: existingOption.amount + 1 };
        } else {
          return existingOption;
        }
      });

      if (updatedOptions.some((existingOption) => existingOption.name === option.name)) {
        setCartItems(
          cartItems.map((productInCart) => {
            if (productInCart.id === product.id) {
              return {
                ...inCart,
                amount: inCart.amount + 1,
                options: updatedOptions,
              };
            } else {
              return productInCart;
            }
          })
        );
      } else {
        setCartItems(
          cartItems.map((productInCart) => {
            if (productInCart.id === product.id) {
              return {
                ...inCart,
                amount: inCart.amount + 1,
                options: [...inCart.options, { ...option, amount: 1 }],
              };
            } else {
              return productInCart;
            }
          })
        );
      }
    } else {
      setCartItems([
        ...cartItems,
        {
          ...product,
          amount: 1,
          options: [{ ...option, amount: 1 }],
        },
      ]);
    }
  };

  const deleteProducts = (product) => {
    const inCart = cartItems.find(
      (productInCart) => productInCart.id === product.id
    );

    if (inCart.amount === 1) {
      setCartItems(
        cartItems.filter((productsInCart) => productsInCart.id !== product.id)
      );
    } else {
      setCartItems(
        cartItems.map((productInCart) => {
          if (productInCart.id === product.id) {
            return { ...inCart, amount: inCart.amount - 1 };
          } else return productInCart;
        })
      );
    }
  };

  // Calcula el precio total de todos los productos en el carrito
  const totalPrices = cartItems.reduce(
    (total, item) =>
      total + item.options.reduce((subtotal, option) => subtotal + option.amount * option.price, 0),
    0
  );

  // Calcula el total de las cantidades de los productos.
  const totalAmount = cartItems.reduce(
    (total, product) => total + product.amount,
    0
  );

  // Limpia todos los productos del carrito.
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addProductsToCart, deleteProducts, totalPrices, totalAmount, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};



