import React, { createContext, useState } from 'react'


export const BASKET = createContext([])

function BasketContext({ children }) {
  const initial = JSON.parse(localStorage.getItem("basket")) || []
  const [basket, setBasket] = useState(initial)

  function addToBasket(item) {
    const inBasket = basket.some(b => b.id === item.id);
    if (inBasket) return; 

    const updatedBasket = [...basket, item];
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
    <BASKET.Provider value={{ basket, addToBasket, deleteBasket, clearBasket }}>
      {children}
    </BASKET.Provider>
  )
}

export default BasketContext