import React, { Suspense, useState } from 'react'
import Navbar from './component/Navbar'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './component/Homepage'
import Account from './component/Accountpage'
import Cart from './component/Cartpage'
import Login from './component/Login'
import Product from './component/Shoes'
import Resister from './component/Resisterpage'
import Products from './component/product'

function App() {
 const[cartItem,setCartItem]=useState([]);
    
  return (
    <div className="App">
      <Router>
      <Navbar />
        {/* <Products /> */}
        <Switch>
          <Suspense fallback={<div>Loading......</div>}>
            <Route path="/" exact>
              <Home />

            </Route>
            <Route path="/product" exact>
              <Product  />

            </Route>
            <Route path="/cart" exact>
              <Cart cartItem={cartItem}/>

            </Route>
            <Route path="/account" exact >
              <Account />

            </Route>
            <Route path="/login" exact >
              <Login />

            </Route>
            <Route path="/resister" exact >
              <Resister />

            </Route>
            <Route path="/product/:id" exact>
              <Products />

            </Route>
          </Suspense>
        </Switch>
      </Router>
    </div>
  )
}

export default App
