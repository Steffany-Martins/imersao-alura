import React from "react";
import "./index.css";
import Menu from "./components/Menu";
import BannerMain from "./components/BannerMain";
import dadosIniciais from "./data/dados_iniciais.json";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

function App() {
  return (
    <div
      style={{
        //fallback
        background: "#580C1F",
        background: "linear-gradient(9deg,#580C1F 10%,#141414 50%)",
      }}
    >
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={"Venha pegar fogo!  🥰"}
      />

      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[0]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[1]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[2]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[3]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[4]} />
      <Carousel ignoreFirstVideo category={dadosIniciais.categorias[5]} />
      <Footer />
    </div>
  );
}

export default App;
