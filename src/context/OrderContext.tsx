import { createContext, useState } from "react";

type OrderContextProps = {
    // appettizer: any,
    hamburger: any,
    combo: any,
    dessert: any,
    beverage: any,
    totalValue: number
}

const OrderContext = createContext<OrderContextProps>({})

interface OrderContextProviderProps {
    children: React.ReactNode
}

const OrderContextProvider = ({ children }: OrderContextProviderProps) => {
    // const [appetizer, setAppettizer] = useState()
    const [hamburgerOrder, setHamburgerOrder] = useState()
    const [combo, setCombo] = useState()
    const [dessert, setDessert] = useState()
    const [beverage, setBeverage] = useState()
    const [totalValue, setTotalValue] = useState<number>()
    

  return(
    <OrderContext.Provider value={{
        // appetizer, setAppettizer,
        hamburgerOrder, setHamburgerOrder,


    }}>
        {children}
    </OrderContext.Provider>
  )  
}

export {OrderContextProvider}
export default OrderContext