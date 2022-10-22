import type { NextPage } from 'next'
import * as S from './styles'

const Home: NextPage = () => {
  return (
    <>
      <S.Wrapper className="grid">
        <S.HomeContainer>
          <S.HomeContent className="container">
            <h1>
              Choose Your Favorite Coffee And Enjoy<span>.</span>
            </h1>
            <p>Buy the best and delicious coffees.</p>
            <S.HomeData>
              <S.HomeDataGroup>
                <h2>120K</h2>
                <h3>Testimonials</h3>
                <p>Testimonials from various customers who trust us.</p>
              </S.HomeDataGroup>
              <S.HomeDataGroup>
                <h2>340+</h2>
                <h3>Exclusive Product</h3>
                <p>Premium preparation with quality ingredients.</p>
              </S.HomeDataGroup>
            </S.HomeData>
          </S.HomeContent>
        </S.HomeContainer>
        <img src="/home.png" alt="" />
      </S.Wrapper>
    </>
  )
}

export default Home
