import React from "react";
import Header from "./components/Header";
import MyCard from "./components/MyCard";
import Footer from "./components/Footer";
import "./App.css"; // Importar estilos CSS
import "bootstrap/dist/css/bootstrap.css";

const App = () => {
  return (
    <div>
      <Header title="Adopta un perrito" />
      <div className="container">
        <div className="row">
          {/* Bartolo */}
          <div className="col-md-3">
            <MyCard
              imgSrc="/src/assets/img/husky.jpg"
              name="Bartolo"
              description="Lleno de energía y listo para jugar. ¡Dale a Bartolo el hogar amoroso que se merece!"
              tagText="Husky"
              tagColor="orange"
            />
          </div>
          {/* Messi */}
          <div className="col-md-3">
            <MyCard
              imgSrc="/src/assets/img/labrador.jpg"
              name="Messi"
              description="Es juguetón, amigable y se lleva bien con niños y otros animales. ¡Haz de Messi parte de tu familia hoy mismo!"
              tagText="Labrador"
              tagColor="skyblue"
            />
          </div>
          {/* Gohan */}
          <div className="col-md-3">
            <MyCard
              imgSrc="/src/assets/img/sharpei.jpg"
              name="Gohan"
              description="Un perro de tamaño mediano con un corazón gigante. Hazte amigo de Gohan y experimenta un amor incondicional!"
              tagText="Shar Pei"
              tagColor="red"
            />
          </div>
          {/* Princesa */}
          <div className="col-md-3">
            <MyCard
              imgSrc="/src/assets/img/beagle.jpg"
              name="Princesa"
              description="Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!"
              tagText="Beagle"
              tagColor="grey"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default App;
