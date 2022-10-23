import { useState } from 'react'
import { ProductCard } from '../../components/ProductCard'
import { products } from '../../data/products'
import * as S from '../../styles/products'

const Products = () => {
  const [productsList, setProductsList] = useState(products)

  const handleFiltered = (category: string) => {
    const newProductsList = products.filter(product => product.category === category)

    setProductsList(newProductsList)
  }

  return (
    <S.Wrapper className="section">
      <S.ProductsContainer className="container">
        <h2 className="section_title">Choose our delicious and best products</h2>
        <S.ProductsFilters>
          <li onClick={() => handleFiltered('delicacies')}>
            <h3>New Delicacies</h3>
            <span>3 products</span>
          </li>
          <li onClick={() => handleFiltered('coffee')}>
            <h3>Hot Coffee</h3>
            <span>4 products</span>
          </li>
          <li onClick={() => handleFiltered('cake')}>
            <h3>Cakes And Delicacies</h3>
            <span>4 products</span>
          </li>
        </S.ProductsFilters>
        <S.ProductsContentGrid className="grid">
          {productsList.map(product => (
            <ProductCard
              key={product.id}
              image={product.image}
              name={product.name}
              price={product.price.toLocaleString('pt-BR', {
                currency: 'USD',
                style: 'currency',
              })}
            />
          ))}
        </S.ProductsContentGrid>
      </S.ProductsContainer>
    </S.Wrapper>
  )
}

export default Products
