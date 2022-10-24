import { BiRightArrowAlt } from 'react-icons/bi'
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa'
import * as S from './styles'

export const Footer = () => {
  return (
    <S.Wrapper>
      <S.FooterContainer className="container">
        <h1>Coffee.</h1>

        <S.FooterContent className="grid">
          <S.FooterData>
            <p>Subscribe to our newsletter</p>
            <S.FooterNewsletter>
              <input type="email" placeholder="Your email address" />
              <button>
                <BiRightArrowAlt />
              </button>
            </S.FooterNewsletter>
          </S.FooterData>
          <S.FooterData>
            <h2>Address</h2>
            <p>
              9876 Hacienda Av. <br />
              Lima, La Libertad 123, Perú
              <img src="/footerflag.png" alt="" />
            </p>
          </S.FooterData>
          <S.FooterData>
            <h2>Contact</h2>
            <p>
              +987654321 <br />
              coffee@email.com
            </p>
          </S.FooterData>
          <S.FooterData>
            <h2>Office</h2>
            <p>
              Monday - Saturday <br />
              9AM - 10PM
            </p>
          </S.FooterData>
        </S.FooterContent>

        <S.FooterGroup>
          <ul>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com/" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
          </ul>

          <span>&#169; Bedimcode. All rigths reserved</span>
        </S.FooterGroup>
      </S.FooterContainer>
    </S.Wrapper>
  )
}
