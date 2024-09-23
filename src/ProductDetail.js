import React from 'react';
import { useParams } from 'react-router-dom';
import Slider from "react-slick";
import './ProductDetail.css';

function ProductDetail({ productsData }) {
  const { productId } = useParams();
  
  // Log the productId and productsData to check if the correct values are passed
  console.log("Product ID from URL:", productId);
  console.log("All products data:", productsData);

  // Find the product by ID
  const product = productsData.find(p => p.id.toString() === productId);

  // Log the found product
  console.log("Found product:", product);

  if (!product) {
    return <p>Product not found.</p>;
  }

  const productImages = product.images && product.images.length > 0
    ? product.images
    : ['/images/default-placeholder.png'];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
  };

  return (
    <div className="product-detail">
      <h1>{product.name}</h1>

      {productImages.length > 0 ? (
        <Slider {...settings}>
          {productImages.map((image, index) => (
            <div key={index}>
              <img
                src={image}
                alt={product.name}
                className="slider-image"
              />
            </div>
          ))}
        </Slider>
      ) : (
        <p>No images available</p>
      )}

      <p className="price">Price: ${product.price}</p>
      <p>{product.description}</p>
      <ul>
        {product.specifications && product.specifications.length > 0 ? (
          product.specifications.map((spec, index) => (
            <li key={index}>{spec}</li>
          ))
        ) : (
          <p>No specifications available</p>
        )}
      </ul>
    </div>
  );
}

export default ProductDetail;
