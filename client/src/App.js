import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/header/NavBar';
import NewNavBar from './components/header/newnavbar';
import Footer from './footer/Footer';
import MainComponent from './home/MainComponent';
import Slide from './home/Slider';
import SignUp from './signup/signup';
import SignIn from './signup/signin';
import Cart from './components/cart/cart';
import Buynow from './components/buynow/Buynow';
import ShowItems from './components/ShowItems';

function App() {
  return (
    <>
        <NavBar />
        <NewNavBar />
        <Routes>
          <Route exact path="/" element={<MainComponent />} />
          <Route exact path="/signin" element={<SignIn />} />
          <Route exact path="/register" element={<SignUp />} />
          <Route exact path="/getproductone/:id" element={<Cart />} />
          <Route exact path="/buynow" element={<Buynow />} />
          {/* <Route exact path="/showitems" element={<ShowItems />} /> */}
        </Routes>
        <Footer />
    </>
  );
}

export default App;
