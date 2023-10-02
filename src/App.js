import './App.css';
import { products } from './products';
import { useState } from 'react';
import ProductsList from './components/ProductsList';
import Header from './components/Header';
import AddProduct from './components/AddProduct';
import Footer from './Pages/Footer';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import ProductDetails from './Pages/ProductDetails';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [productsList, setProductsList] = useState(products);
  const [searchText, setSearchText] = useState('');
  const [searchRating, setSearchRating] = useState(0);

  const handleProduct = (newProduct) => {
    setProductsList([...productsList, newProduct])
}

  return (
    <>
      <Header setSearchText={setSearchText} setSearchRating={setSearchRating} />
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/products' element={<><AddProduct handleProduct={handleProduct} />
      <ProductsList products={productsList} searchText={searchText} searchRating={searchRating} /> </>} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/detail/:id' element={<ProductDetails productsList={productsList} />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
