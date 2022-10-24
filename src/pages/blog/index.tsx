import { NextPage } from 'next'
import Head from 'next/head'
import { BiRightArrowAlt, BiComment, BiShow } from 'react-icons/bi'
import * as S from '../../styles/blog'

const Blog: NextPage = () => {
  return (
    <>
      <Head>
        <title>Coffee | Blog</title>
      </Head>
      <S.Wrapper className="section">
        <S.BlogContainer className="container">
          <h2 className="section_title">
            Our Blogs Coffee with trending topic for this week
          </h2>
          <S.BlogContent className="grid">
            <S.BlogCard>
              <div className="blog_image">
                <img src="/blog1.png" alt="" />
                <a href="#">
                  <BiRightArrowAlt />
                </a>
              </div>
              <S.BlogData>
                <h2>10 Coffee Recommendations</h2>
                <p>
                  The blogs about coffee will help you a lot about how it is prepared, its
                  waiting time, for a good quality coffee.
                </p>
                <S.BlogFooter>
                  <div className="blog_reaction">
                    <BiComment />
                    <span>12</span>
                  </div>
                  <div className="blog_reaction">
                    <BiShow />
                    <span>76,5K</span>
                  </div>
                </S.BlogFooter>
              </S.BlogData>
            </S.BlogCard>
            <S.BlogCard>
              <div className="blog_image">
                <img src="/blog2.png" alt="" />
                <a href="#">
                  <BiRightArrowAlt />
                </a>
              </div>
              <S.BlogData>
                <h2>12 Benefits Of Drinking Coffee</h2>
                <p>
                  The blogs about coffee will help you a lot about how it is prepared, its
                  waiting time, for a good quality coffee.
                </p>
                <S.BlogFooter>
                  <div className="blog_reaction">
                    <BiComment />
                    <span>42</span>
                  </div>
                  <div className="blog_reaction">
                    <BiShow />
                    <span>356,7K</span>
                  </div>
                </S.BlogFooter>
              </S.BlogData>
            </S.BlogCard>
          </S.BlogContent>
        </S.BlogContainer>
      </S.Wrapper>
    </>
  )
}

export default Blog
