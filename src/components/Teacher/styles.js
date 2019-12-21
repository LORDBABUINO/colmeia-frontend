import styled from 'styled-components'
import colors from '../../styles/colors'

export const Container = styled.li`
  display: inline-block;
  border: 1px solid #e3e3e3;
  border-radius: 9px;
  padding: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  background-color: white;
  vertical-align: top;
  margin-bottom: 15px;

  @media (max-width: 992px) {
    margin: 0 15px 20px;
  }
`
export const Image = styled.img`
  display: inline-block;
  height: 100px;
  width: 100px;
  border: 4px solid #e3e3e3;
  border-radius: 50%;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  vertical-align: top;
  margin: 0 calc((25% - 100px) / 2);

  @media (max-width: 768px) {
    height: 75px;
    width: 75px;
    margin: 0 calc((25% - 75px) / 2);
  }
`
export const HeaderDetails = styled.div`
  display: inline-block;
  max-width: 50%;
  margin-left: 10px;

  h2 {
    font-size: 24px;
    font-weight: 700;
    color: #303030;
    margin-left: 5px;

    @media (max-width: 768px) {
      font-size: 17px;
      margin-left: 0;
    }
  }

  p {
    text-transform: capitalize;
    font-size: 16px;
    margin: 10px 0 5px 5px;
  }

  li {
    display: inline-block;
    border: 1px solid ${colors.primary};
    background-color: #fff;
    color: ${colors.primary};
    padding: 3px 13px;
    margin: 3px;
    border-radius: 5px;
    font-size: 12px;
  }
`
export const Note = styled.div`
  display: inline-block;
  float: right;
  font-weight: 700;
  font-size: 16px;
  margin-right: 5px;
  color: #989898;
  font-size: 20px;

  svg {
    vertical-align: middle;
    margin-left: 5px;
    height: 30px;
    width: 30px;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    svg {
      height: 20px;
      width: 20px;
    }
  }
`
export const CurriculumTitle = styled.div`
  position: relative;
  text-transform: capitalize;
  font-size: 20px;
  font-weight: 500;
  margin: 30px 0 25px 10px;
  color: #f9b21b;

  :before {
    content: '';
    display: block;
    position: absolute;
    top: 5px;
    left: -10px;
    border-bottom: 2px solid ${colors.primary};
    height: 100%;
    width: 75px;
  }
`
export const CurriculumBody = styled.div`
  font-size: 16px;
  color: #8b8b8b;
  margin-bottom: 30px;
`
export const Place = styled.div`
  display: inline-block;
  color: #303030;
  margin-top: 5px;

  svg {
    vertical-align: middle;
    margin-right: 5px;
  }
`
export const Button = styled.button`
  display: inline-block;
  float: right;
  text-transform: capitalize;
  border: none;
  background-color: ${colors.primary};
  color: white;
  padding: 7px 27px;
  border-radius: 5px;
  font-size: 18px;
  transition: all 0.3s;

  @media (max-width: 768px) {
    font-size: 14px;
    padding: 0;
    font-weight: 700;
    color: ${colors.primary};
    background-color: white;

    :after {
      content: '›';
      font-size: 15px;
      margin-left: 3px;
    }
  }
`
