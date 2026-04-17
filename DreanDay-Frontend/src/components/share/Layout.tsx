
import { Outlet } from 'react-router-dom';
import Navbar from '../ client/home/Navbar';
import FooterComponent from '../ client/home/Footer';

function Layout(){
  return (
    <div>
        <>
        <Navbar/>
        <Outlet/>
        <FooterComponent/>
        </>
    </div>
  )
}

export default Layout;