import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeContainer from '../Container/Home';
import MoviesContainer from '../Container/Movies';
import TvSeriesContainer from '../Container/TVSeries';
import SearchContainer from '../Container/Search';
import DetailsContainer from '../Container/Details';
import AboutContainer from '../Container/About';

import ContactContainer from '../Container/Contact';
// Header And Footer 

import HeaderComponents from '../Container/Header';
import FooterComponents from '../Container/Footer';

import Login from '../Container/User/UserLogin';
const RouterComponents = () => {

   return (
      <>
         <BrowserRouter>
            <HeaderComponents  />
            <Routes>
               <Route path='/' element={<HomeContainer />} />
               <Route path='/movies' element={<MoviesContainer />} />
               <Route path='/about' element={<AboutContainer />} />
               <Route path='/contact' element={<ContactContainer />} />
               <Route path='/series' element={<TvSeriesContainer />} />
               <Route path='/search' element={<SearchContainer />} />
               <Route path='/details/:movieid/:mediatype' element={<DetailsContainer />} />
               <Route path="/login" element={<Login/>}/>

            </Routes>
            <FooterComponents />
         </BrowserRouter>
      </>
   )
}
export default RouterComponents;
