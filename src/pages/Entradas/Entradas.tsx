import React, { useEffect, useState } from "react";
import { Button, CategoryList, Layout, ProductCard } from "../../components";
import { ProductCategories, ProductWrapper } from "./Entradas.style";
import {
  ProductCardContent,
  ProductCardOption,
  ProductCardPrice,
} from "../../components/ProductCard/ProductCard.style";

export default function Entradas() {
  const [isLoading, setIsLoading] = useState(false);
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);
  const [selectedOption, setSelectedOption] = useState<boolean>()

  const handleRadioButtonOption = (event: React.ChangeEvent<HTMLInputElement>) => {
    selectedOption(event.target.value);
  }

  const priceFormat = (price: number) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(price);
  };

  const getCategories = async () => {
    const url = 'http://localhost:8000/categories'

    setIsLoading(true);
    
    try {
      const response = await fetch(url)
      const data = await response.json()
      setCategories(data)
    }catch(error){
      console.log(error)
    }finally{
      setIsLoading(false);
    };
  };

  const getEntradas = async () => {
    const url = 'http://localhost:8000/appetizers'
    setIsLoading(true);

    try {
      const response = await fetch(url)
      const data = await response.json()
      setProducts(data)
    }catch(error){
      console.log(error);
    }finally{
      setIsLoading(false);
    } 
  }

  useEffect(() => {
    getCategories();
    
  }, []);

  useEffect(() => {
    getEntradas();
  }, []);

  return (
    <Layout>
      <h1>Entradas</h1>
      <ProductCategories>
        { isLoading
          ? (
          <p>Carregando</p>
          ) : ( 
          categories.map((item, index) => (
            <CategoryList key={index} data={item} />
          ))
        )}
      </ProductCategories>
      <ProductWrapper>

        {isLoading ? (
          <p>Carregando</p>
        ) : (
          products.map((product, index) => (
            <ProductCard key={index}>
              <ProductCardContent>
                <h2>{product.title}</h2>
                <p>{product.description}</p>
                <ProductCardOption>
                <label>
                  <input 
                    name="size"
                    value={0}
                    type="radio"
                    onChange={handleRadioButtonOption} />
                    Pequeno
                </label>
                <label>
                  <input 
                    name="size"
                    value={1}
                    type="radio"
                    onChange={handleRadioButtonOption} />
                    Grande
                </label>
                </ProductCardOption>
                <Button onClick={() => {}}>Adicionar</Button>
              </ProductCardContent>

              <ProductCardPrice>
                {priceFormat(product.value.small)}
              </ProductCardPrice>
              <img src={product.image} alt={product.title} />
            </ProductCard>
          ))
        )}
          
      </ProductWrapper>
    </Layout>
  );
}
