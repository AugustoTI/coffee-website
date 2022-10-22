import * as S from './styles'

export const Specialty = () => {
  return (
    <S.Wrapper className="container section">
      <S.SpecialtyContainer>
        <S.SpecialtyBox>
          <h2 className="section_title">
            Specialty coffees that make you happy and cheer you up!
          </h2>
          <div>
            <a href="#" className="button">
              See more
            </a>
          </div>
        </S.SpecialtyBox>
        <S.SpecialtyCategory>
          <S.SpecialtyCategoryGroup>
            <img src="/specialty1.png" alt="" />
            <h3>Selected Coffee</h3>
            <p>We select the best premium coffee, for a true taste.</p>
          </S.SpecialtyCategoryGroup>
          <S.SpecialtyCategoryGroup>
            <img src="/specialty2.png" alt="" />
            <h3>Delicious Cookies</h3>
            <p>Enjoy your coffee with some hot cookies</p>
          </S.SpecialtyCategoryGroup>
          <S.SpecialtyCategoryGroup>
            <img src="/specialty3.png" alt="" />
            <h3>Enjoy at Home</h3>
            <p>Enjoy the best coffee in the comfort of your home.</p>
          </S.SpecialtyCategoryGroup>
        </S.SpecialtyCategory>
      </S.SpecialtyContainer>
    </S.Wrapper>
  )
}
