import React, { createContext, useState } from 'react'

export const BASKET = createContext([])

function BasketContext({ children }) {
  const initial = JSON.parse(localStorage.getItem("basket")) || []
  const [basket, setBasket] = useState(initial)

  function addToBasket(item) {
    const inBasket = basket.find(elem => elem.id === item.id);
    let updatedBasket;
    if (inBasket) {
      updatedBasket = basket.map(elem =>
        elem.id === item.id
          ? { ...elem, count: elem.count + (item.count || 1) } // ✅ handles undefined count safely
          : elem
      );
    } else {
      updatedBasket = [...basket, { ...item, count: item.count || 1 }]; // ✅ ensures count always present
    }
    setBasket(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  }

  function updateItemCount(id, newCount) {
    const updatedBasket = basket.map(item =>
      item.id === id ? { ...item, count: newCount } : item
    );
    setBasket(updatedBasket);
    localStorage.setItem("basket", JSON.stringify(updatedBasket));
  }

  function deleteBasket(id) {
    const basketArr = basket.filter(item => item.id != id)
    setBasket(basketArr)
    localStorage.setItem("basket", JSON.stringify(basketArr))
  }
  function clearBasket() {
    localStorage.removeItem("basket")
    setBasket([])

  }
  return (
    <BASKET.Provider value={{ basket, addToBasket, deleteBasket, clearBasket, updateItemCount }}>
      {children}
    </BASKET.Provider>
  )
}

export default BasketContext