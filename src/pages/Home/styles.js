import styled from 'styled-components'

export const List = styled.ul`
  margin: 0 auto;

  @media (min-width: 768px) {
    max-width: 750px;
  }
  @media (min-width: 992px) {
    max-width: 970px;
    column-count: 2;
    column-gap: 30px;
  }
  @media (min-width: 1200px) {
    max-width: 1170px;
  }
`
