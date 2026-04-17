import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Authantication from './pages/auth';
import NotFoundPage from './components/share/NotFoundPage';
import LandingPage from './pages/ client';
import Layout from './components/share/Layout';

function Routers() {
 

  return (
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout />}>
       <Route index element={<LandingPage />}/>
    </Route>
   
    <Route path='/login' element={<Authantication />}/>
    <Route path='/signup' element={<Authantication />}/>
     <Route
          path='*'
          element={<NotFoundPage />}
        />
  </Routes>
  </BrowserRouter>
  )
}

export default Routers
