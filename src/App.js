import { useEffect } from 'react';
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
import { useSelector, useDispatch } from 'react-redux';
import { calculateTotals,getCartItems } from './features/Cart/cartSlice';
import {Routes, Route} from "react-router-dom"
import Modal from "./components/Modal"
import SingleProduct from './components/SingleProduct';

function App() {
  const { cartItems, isLoading } = useSelector((state) => state.cart);
  const { isOpen } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(calculateTotals());
  }, [cartItems,dispatch]);

  // useEffect(() => {
  //   dispatch(getCartItems("ayomiku"));
  // }, [dispatch]);

  if (isLoading) {
    return (
      <div className='loading'>
        <h1>Loading...</h1>
      </div>
    );
  }


  return (
    <main>
    {isOpen && <Modal />}
    <Navbar />
    <Routes>
      <Route path='/' element={<CartContainer />}/>
      <Route path='/:id' element={<SingleProduct/>}/>
    </Routes>
    </main>
  );
}

export default App;