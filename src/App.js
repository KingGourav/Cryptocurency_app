import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import { Layout, Typography, Space, Card } from 'antd';


import './App.css';
import Home from './components/Home';
import Exchanges from './components/Exchanges';

import Navbar from "./components/Navbar";
import CryptoDetails from "./components/CryptoDetails";
import News from './components/News';
import Game from './components/Game';
import About from './components/About';


const App = () => (
  <div className="app">
    <div className="navbar">
      <Navbar />
    </div>
    <div className="main">
      <Layout style={{background:'#FAFAFA'}}>
        <div className="routes">
          <Switch>
            <Route exact path="/">
            <Home></Home>
            </Route>
            <Route exact path="/exchanges">
              <Exchanges></Exchanges>
            </Route>
            <Route exact path="/cryptocurency">
       <Game></Game>
            </Route>
            <Route exact path="/crypto/:coinId">
              <CryptoDetails />
            </Route>
            <Route exact path="/news">
              <News />
            </Route>
            <Route exact path="/about">
             <About></About>
            </Route>
          </Switch>
        </div>
      </Layout>
      <div className="footer">
        <Typography.Title level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2021
          <Link to="/">
            Cryptoverse Inc.
          </Link> <br />
          All Rights Reserved.
        </Typography.Title>
        <Space>
          <Link to="/">Home</Link>
          <Link to="/exchanges">Exchanges</Link>
          <Link to="/news">News</Link>
        </Space>
      </div>
    </div>
  </div>
);

export default App;