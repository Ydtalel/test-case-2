import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import MainBanner from './components/MainBanner';
import CarouselComponent from './components/Carousel';
import PriceBanner from './components/PriceBanner';

const App = () => {
  return (
    <div>
      <Header logoLink="/" logoSrc="/" />
      <MainBanner />
      <main>
        <h1>Добро пожаловать на наш сайт!</h1>
        <CarouselComponent />
        <PriceBanner />
      </main>
      <Footer />
    </div>
  );
};

export default App;
