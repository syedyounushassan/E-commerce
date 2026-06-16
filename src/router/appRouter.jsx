import { Routes,Route, BrowserRouter } from 'react-router-dom' 
import ContactPage from "../pages/contact"
import ProductCard from '../component/ProductCard'
import Home from '../pages/home';
import Layout from '../component/Layout';
import Product from '../pages/product';



function AppRouter() {

    return(
        <BrowserRouter>
        <Routes>
        <Route path='*' element={<div>Page not found</div>} />

        <Route element={<Layout/>}>
        <Route path='/' element={<Home/>} />
        <Route path='/products' element={<Product/>} />
        <Route path='/product/:id' element={<Home/>} />
        <Route path='/contact' element={<ContactPage />} />
        
        </Route>
        </Routes>
        </BrowserRouter>
    )
    
}

export default AppRouter;