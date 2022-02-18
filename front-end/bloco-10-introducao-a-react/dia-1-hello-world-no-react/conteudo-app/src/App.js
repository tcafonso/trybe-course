import React from 'react';
import './App.css';
import Header from './component/Header';
import Content from './component/Content';
import Footer from './component/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Content />
        <Footer />
      </div>
    );
  }
}

export default App