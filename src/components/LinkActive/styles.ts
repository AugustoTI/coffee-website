import styled, { css } from 'styled-components'

interface LinkElementProps {
  isActive: boolean
}

export const LinkElement = styled.a<LinkElementProps>`
  ${({ isActive }) => css`
    text-transform: uppercase;
    color: ${isActive ? '#fff' : 'var(--text-color-light)'};
    font-weight: ${isActive ? 'bold' : 'initial'};
    font-size: var(--h2-font-size);
    transition: 0.3s;

    &:hover {
      color: #fff;
    }
  `}
`
