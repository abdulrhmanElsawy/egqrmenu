import './App.css';
import { Routes, Route, useLocation } from "react-router-dom";
import React, { useState, useRef } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Header from './components/Header';
import CategoriesSlider from './components/CategoriesSlider';
import PopProductsSlider from './components/PopProductsSlider';
import MainCategories from './components/MainCategories';
import CatProducts from './components/CatProducts';
import DownNav from './components/DownNav';
import Search from './components/Search';
import Category from './components/Category';
import Product from './components/Product';
import Cart from './components/Cart';

    


function App() {

return (
    <div className="App">

            <Routes>

            <Route path="/egqrmenu" element={
                <>
                <Header />
                <Search />
                <CategoriesSlider />
                <PopProductsSlider />
                <MainCategories />
                <CatProducts />
                <DownNav />


                </>
            } />



            
            <Route path="/egqrmenu/category" element={
                <>
                <Search className="nomargin"/>
                <Category />
                <DownNav />


                </>
            } />


        <Route path="/egqrmenu/product" element={
                <>
                <Product />
                <DownNav />


                </>
            } />


            
        <Route path="/egqrmenu/bookmark" element={
                <>
                <Cart />
                <DownNav />


                </>
            } />





        </Routes>


    </div>
);
}

export default App;
