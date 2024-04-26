import { SportsStoreDataStore } from "./data/DataStore"
import { Provider } from "react-redux"

import "./App.css"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Shop } from "./shop/Shop"
import { CartDetails } from "./shop/CartDetails"

function App() {
  return (
    <Provider store={SportsStoreDataStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/shop/products/:category?" element={<Shop />} />
          <Route path="/shop/cart" element={<CartDetails />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
