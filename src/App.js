import React from 'react';
import Menu from './components/Menu';
import dadosIniciais from './data/dados_iniciais.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
  <div style={{ background: "#141414"}}>
      <Menu />

      <BannerMain
        videoTitle = { dadosIniciais.categorias[0].titulo }
        url = { dadosIniciais.categorias[0].videos[0].url }
        videoDescription = { "A Journey to the End of Time." }
      />

      <Carousel
        ignoreFirstVideo
        category = { dadosIniciais.categorias[0] }
      />
    </div>
  );
}

export default App;
