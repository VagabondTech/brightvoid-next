'use client';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Accordion from './Accordion';
import ProductGallery from './ProductGallery';
import corsetProducts from '../corsets/corsetsProducts-data/corsetsProducts';
import skirtProducts from '../skirts/skirtsProducts-data/skirtsProducts';

const Container = styled.div`
  height: 100vh;
  margin-top: 5%;
  display: flex;
  justify-content: center;

  @media (max-width: 1000px) {
    /* flex-direction: column; */
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 90%;
  width: 50%;
  margin: 0 10px;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const ProductInfoContainer = styled.div`
  height: 90%;
  width: 30%;
`;

const Description = styled.p`
  font-size: xx-large;
  margin-left: 10px;
`;

const Price = styled.p`
  font-size: larger;
  margin-left: 10px;
`;

export default function ProductDetails({ product }) {

  const [selectedImage, setSelectedImage] = useState(product.image);

  useEffect(() => {
    window.scrollTo(0, 180);
    setSelectedImage(product.image);
  }, [product]);

  const productImages = corsetProducts.find(item => item.id === product.id)?.images || [];
  const productImages2 = skirtProducts.find(item => item.id === product.id)?.images || [];

  const allProductImages = productImages.concat(productImages2);

  return (
    <Container>
      <div style={{display: 'contents'}}>
        <ProductGallery images={allProductImages} selectedImage={selectedImage} setSelectedImage={setSelectedImage} />
        <ImageContainer>
          <img src={selectedImage} />
        </ImageContainer>
      </div>
      <ProductInfoContainer>
        <Description>{product.description}</Description>
        <br />
        <Price>R {product.price}</Price>
        <br />
        <Accordion />
      </ProductInfoContainer>
    </Container>
  )
}
