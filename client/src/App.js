import './App.css';
import Footer from './components/footer/Footer';
import Navbar from './components/header/Navbar'
import Maincomponent from './components/home/Maincomponent';
import Newnav from './components/newnavbar/Newnav';
import SignUp from './components/signup_sign/SignUp';
import Sign_in from './components/signup_sign/Sign_in'
import Cart from './components/cart/Cart';
import { Routes, Route } from 'react-router-dom';
import Buynow from './components/buynow/Buynow';
function App() {
  return (
    < >
     <Navbar/>
     <Newnav/>
     <Routes>
     <Route path='/' element={ <Maincomponent/>}/>
     <Route path='/login' element={ <Sign_in/>}/>
     <Route path='/register' element={ <SignUp/>}/>
     <Route path='/getproductsone/:id' element={<Cart/>}></Route>
     <Route path='/buynow' element={<Buynow/>}></Route>
     </Routes>
     <Footer/>
     
    </>
  );
}

export default App;
