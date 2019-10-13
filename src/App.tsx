import React from 'react';
import './styles/Styles.css';
import { Header } from './common/Header';
import { Footer } from './common/Footer';
import { Container } from './components/Container';

const App: React.FC = () => {
  return (
    <div className="app">
      <Container />
      <Footer />
    </div>
  );
}

export default App;
