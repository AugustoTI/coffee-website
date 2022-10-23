import { BiShoppingBag } from 'react-icons/bi'
import * as S from './styles'

interface ProductCardProps {
  price: string
  name: string
  image: string
}

export const ProductCard = ({ image, name, price }: ProductCardProps) => {
  return (
    <S.Container>
      <S.Shape>
        <img src={image} alt="" />
      </S.Shape>
      <S.Data>
        <h2>{price}</h2>
        <h3>{name}</h3>
        <button className="button">
          <BiShoppingBag />
        </button>
      </S.Data>
    </S.Container>
  )
}
