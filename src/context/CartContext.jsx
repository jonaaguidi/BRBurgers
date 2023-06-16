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
    console.log(cartItems); // Debe sumar +1 al amount en cada click
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

  return (
    <CartContext.Provider
      value={{ cartItems, addProductsToCart, deleteProducts }}
    >
      {children}
    </CartContext.Provider>
  );
};



