import styled from 'styled-components'

export const Container = styled.li`
  display: block;
  border: 1px solid #e3e3e3;
  border-radius: 9px;
  padding: 20px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.08);
  margin: 0 15px 20px;
  background-color: white;
`
export const Header = styled.div``
export const Image = styled.img`
  display: inline-block;
  height: 100px;
  width: 100px;
  border: 4px solid #e3e3e3;
  border-radius: 50%;
  box-shadow: 1px 1px 1px 1px rgba(0, 0, 0, 0.2);
  vertical-align: text-top;
  margin-right: 20px;
`
export const HeaderDetails = styled.div`
  display: inline-block;
  font-size: 17px;
  font-weight: 700;
  color: #303030;
`
export const Note = styled.div`
  display: inline-block;
  float: right;
  font-weight: 700;
  font-size: 16px;
  margin-right: 5px;
  color: #989898;

  svg {
    vertical-align: middle;
    margin-left: 5px;
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
    border-bottom: 2px solid #ff8008;
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

  svg {
    vertical-align: middle;
    margin-right: 5px;
  }
`
export const Button = styled.button`
  display: inline-block;
  float: right;
  text-transform: capitalize;
  color: #ff8008;
  font-weight: 700;
  background-color: white;
  border: none;

  :after {
    content: '›';
    font-size: 15px;
    margin-left: 3px;
  }
`
