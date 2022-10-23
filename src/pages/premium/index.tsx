import { NextPage } from 'next'
import { BiRightArrowAlt } from 'react-icons/bi'
import Head from 'next/head'
import * as S from '../../styles/premium'

const Premium: NextPage = () => {
  return (
    <>
      <Head>
        <title>Coffee | Premium</title>
      </Head>
      <S.Wrapper className="section">
        <S.PremiumContainer className="container">
          <h2 className="section_title">
            We offer a premium and better quality preparation just for you!
          </h2>
          <S.PremiumContent className="grid">
            <S.PremiumImages>
              <img src="/quality1.png" alt="" className="image_big" />
              <img src="/quality2.png" alt="" className="image_small" />
            </S.PremiumImages>
            <S.PremiumData>
              <h1>Premium Coffee</h1>
              <h2>$94.99</h2>
              <span>Especial Price</span>
              <p>
                We are delighted with our coffee. That&#39;s why you get the best premium
                coffee plus the kettle made of resistant materials that you see in the
                image, for a special price.
              </p>
              <S.PremiumButtons>
                <button className="button">Buy Now</button>
                <a href="#">
                  See more
                  <BiRightArrowAlt />
                </a>
              </S.PremiumButtons>
            </S.PremiumData>
          </S.PremiumContent>
        </S.PremiumContainer>
      </S.Wrapper>
    </>
  )
}

export default Premium
