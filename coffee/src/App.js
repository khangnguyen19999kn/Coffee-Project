
import './App.css';
import StateCartProvider from './Context/Provider/CartProvider';
import StateCart from './Context/Provider/CartProvider';
import CartOrder from './Header/CartOrder';
import Footer from './Header/Footer';
import Header from './Header/Header';
import ModalFooter from './Header/ModalFooter';
import News from './Header/News';
import PageNew from './Header/PageNew';
import PageProduct from './Header/PageProduct';
import Product from './Header/Product';
import Slide from './Header/Slide';
import Store from './Header/Store';
import { CartProvider } from './Context/Provider/CartProvider'
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Home from './page/Home/Home';
import NewsPage from './page/News/NewsPage';
import ListProduct from './page/listProduct/ListProduct';
import StorePage from './page/Store/StorePage';
import CheckOut from './page/CheckOut/CheckOut';
import data from "./Data/dataProduct.json";
import TestDetail from './Header/TestDetail';
import { PageProductProvider } from './Context/Provider/PageProductProvider';
import DetailNews from './page/News/DetailNews';
import Menutest from './Header/Menutest';
import PageHistoryBuy from './page/HistoryBuy/PageHistoryBuy';



function App() {


  return (
    <BrowserRouter>
    <CartProvider>
    <PageProductProvider>
      {/* <Header/> */}
      <Menutest/>
      <Routes>
        <Route exact path='/home' element={<Home/>} />
        <Route exact path='/' element={<Home/>} />
        <Route exact path='/news' element={<NewsPage/>} />
        <Route exact path='/list-product' element={<ListProduct/>} />
        <Route exact path='/store' element={<StorePage/>} />
        <Route exact path='/checkout' element={<CheckOut/>} />
        <Route exact path='/history' element={<PageHistoryBuy/>}  />
        {/* <Route exact path='/product/:id' element={<TestDetail/>} /> */}
        <Route exact path='/news/1' element={<DetailNews/>} />
        <Route exact path='/product/:id' element={<PageProduct/>} />
        <Route  path='*' element={<Home/>} />
      
      </Routes>
         <ModalFooter />
        <Footer />
      </PageProductProvider>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
