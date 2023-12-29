import React from 'react'
import { Routes , Route, Router } from 'react-router-dom';
import HomePage from '../../Screens/HomeScreen/HomePage';
import MenuPage from '../../Screens/MenuScreen/MenuPage';
const All_Routes = () => {
  return (
    <>
    <Routes>
        <Route path='/' element={<HomePage/>}></Route>
        <Route path='/menu' element={<MenuPage/>}></Route>
    </Routes>
    </>
  )
}

export default All_Routes;