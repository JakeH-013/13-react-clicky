import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/header';
import Footer from "./components/Footer/footer";
import CardBoard from "./components/CardBoard/cardBoard";
import Wrapper from "./components/Wrapper/wrapper";

function App() {
  return (
    <Wrapper>
      <Header />
      <Footer />
    </Wrapper>
  );
}

export default App;
