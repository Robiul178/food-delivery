import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Context from './components/ContextApi/Context';
import Navbar from './components/Header/Navbar/Navbar';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import ManageOrder from './components/ManageOrder/ManageOrder';
import NotFound from './components/NotFound/NotFound';
import PrivetRoute from './components/PrivetRoute/PrivetRoute';
import Registration from './components/Registration/Registration';
import Service from './components/Service/Service';
import './index.css';

function App() {
  return (
    <>
      <Context>
        <BrowserRouter>
          <Navbar></Navbar>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/home' element={<Home />} />
            <Route path='/order' element={<Service />} />
            <Route path='/manageOrder' element={
              <PrivetRoute>
                <ManageOrder />
              </PrivetRoute>
            } />
            <Route path='/login' element={<Login />} />
            <Route path='/registration' element={<Registration />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Context>
    </>
  );
}

export default App;
