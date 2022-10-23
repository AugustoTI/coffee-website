import Head from 'next/head'
import { useEffect, useState } from 'react'
import { ProductCard } from '../../components/ProductCard'
import { IProducts, products } from '../../data/products'
import * as S from '../../styles/products'

type TypeFilter = 'delicacies' | 'coffee' | 'cake' | null

const Products = () => {
  const [productsList, setProductsList] = useState<IProducts[]>([])
  const [filterActive, setFilterActive] = useState<TypeFilter>(null)

  const handleFiltered = (category: TypeFilter) => {
    const newProductsList = products.filter(product => product.category === category)

    setFilterActive(category)
    setProductsList(newProductsList)
  }

  useEffect(() => {
    handleFiltered('delicacies')
  }, [])

  return (
    <>
      <Head>
        <title>Coffee | Products</title>
      </Head>
      <S.Wrapper className="section">
        <S.ProductsContainer className="container">
          <h2 className="section_title">Choose our delicious and best products</h2>
          <S.ProductsFilters>
            <li
              onClick={() => handleFiltered('delicacies')}
              className={filterActive === 'delicacies' ? 'active' : ''}
            >
              <h3>New Delicacies</h3>
              <span>3 products</span>
            </li>
            <li
              onClick={() => handleFiltered('coffee')}
              className={filterActive === 'coffee' ? 'active' : ''}
            >
              <h3>Hot Coffee</h3>
              <span>4 products</span>
            </li>
            <li
              onClick={() => handleFiltered('cake')}
              className={filterActive === 'cake' ? 'active' : ''}
            >
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
    </>
  )
}

export default Products
