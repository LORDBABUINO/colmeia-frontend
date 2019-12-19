import React from 'react'

import {
  Container,
  Image,
  HeaderDetails,
  Note,
  CurriculumTitle,
  CurriculumBody,
  Place,
  Button,
} from './styles'

export default function Professor({ data }) {
  return (
    <Container>
      <Image src={data.imagem} alt="Pessoa" />
      <HeaderDetails>{data.nome}</HeaderDetails>
      <Note>{data.nota.toFixed(2)}</Note>
      <CurriculumTitle>currículo</CurriculumTitle>
      <CurriculumBody>{data.curriculo}</CurriculumBody>
      <Place>{data.bairro}</Place>
      <Button>selecionar</Button>
    </Container>
  )
}
