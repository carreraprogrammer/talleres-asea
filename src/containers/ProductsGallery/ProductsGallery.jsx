import React from 'react';
import './ProductsGallery.css';

const ProductsGallery = () => {
  const productsData = [
    {
      id: 1,
      image: 'ruta_de_la_imagen1.jpg',
      title: 'Mezcladoras',
      description: 'Descripción de las mezcladoras...',
    },
    {
      id: 2,
      image: 'ruta_de_la_imagen2.jpg',
      title: 'Plumas Grúas',
      description: 'Descripción de las plumas grúas...',
    },
    {
      id: 3,
      image: 'ruta_de_la_imagen3.jpg',
      title: 'Cortadoras De Concreto',
      description: 'Descripción de las cortadoras de concreto...',
    },
    {
      id: 4,
      image: 'ruta_de_la_imagen4.jpg',
      title: 'Reglas Vibratorias',
      description: 'Descripción de las reglas vibratorias...',
    },
    {
      id: 5,
      image: 'ruta_de_la_imagen5.jpg',
      title: 'Maquinaria Agrícola',
      description: 'Descripción de la maquinaria agrícola...',
    },
    {
      id: 6,
      image: 'ruta_de_la_imagen6.jpg',
      title: 'Compuertas',
      description: 'Descripción de las compuertas...',
    },
    {
      id: 7,
      image: 'ruta_de_la_imagen7.jpg',
      title: 'Implementos Sanitarios y Para Acueductos',
      description: 'Descripción de los implementos sanitarios y para acueductos...',
    },
  ];

  return (
    <div className="productsGalleryContainer">
      {productsData.map((product, index) => (
        <div
          className="productContainer"
          key={product.id}
          style={{
            display: 'flex',
            marginBottom: '20px',
            flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', // Cambia la dirección de la fila en impares
          }}
        >
          <div className="productGalleryImageContainer">
            <img
              src={product.image}
              alt={product.title}
              style={{ width: '200px', height: '150px', objectFit: 'cover' }}
            />
          </div>
          <div
            className="productGalleryTextContainer"
            style={{ marginLeft: index % 2 === 0 ? '10px' : '0', marginRight: index % 2 === 0 ? '0' : '10px' }}
          >
            <h2>{product.title}</h2>
            <p>{product.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductsGallery;
