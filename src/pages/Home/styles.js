import styled, { keyframes } from 'styled-components'
import colors from '../../styles/colors'

export const Label = styled.label`
  display: block;
  width: calc(100% - 30px);
  text-transform: capitalize;
  margin: 50px 15px 0px;

  @media (min-width: 768px) {
    max-width: 750px;
    margin: 50px auto 0px;
  }
  @media (min-width: 992px) {
    max-width: 970px;
  }
  @media (min-width: 1200px) {
    max-width: 1170px;
  }
`
export const Search = styled.input`
  display: block;
  width: calc(100% - 30px);
  border: 2px solid ${colors.primary};
  padding: 6px 12px 6px 10px;
  margin: 0 15px 50px;

  @media (min-width: 768px) {
    margin: 0 auto 50px;
    max-width: 750px;
  }
  @media (min-width: 992px) {
    max-width: 970px;
  }
  @media (min-width: 1200px) {
    max-width: 1170px;
  }
`
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`
export const List = styled.ul`
  margin: 0 auto;

  > svg {
    color: ${colors.primary};
    position: absolute;
    top: 50%;
    left: 50%;
    height: 50px;
    width: 50px;
    margin-top: -25px;
    margin-left: -25px;
    animation: ${rotate} 2s linear infinite;
  }

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
