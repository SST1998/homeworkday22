import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Product from "./pages/Product"
import Checkout from "./pages/Checkout"
import ResponsiveAppBar from "./components/ResponsiveAppBar"
import Notfound from "./pages/Notfound"

const App = () => {
  return (
    <>
      <ResponsiveAppBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  )
}

const ExportApp = () => {
  return (
    <>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </>
  )
} 

export default ExportApp