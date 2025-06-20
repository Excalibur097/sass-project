import {Route, Routes} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/Footer";
import AboutUs from "./pages/aboutUs/AboutUs";
import Blogs from "./pages/blogs/Blogs";
import Contact from "./pages/contact/Contact";
import Pricing from "./pages/pricing/Pricing";
import Product from "./pages/product/Product";



function App() {
  

  return (
    <div className="min-h-screen">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<AboutUs/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/pricing" element={<Pricing/>}/>
        <Route path="/product" element={<Product/>}/>
      </Routes>
      <Footer/>
    </div>
    
  )
}

export default App
