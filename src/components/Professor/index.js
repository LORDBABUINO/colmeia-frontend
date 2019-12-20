import React from 'react'
import { MdStar } from 'react-icons/md'
import { FaMapMarkerAlt } from 'react-icons/fa'

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
      <Note>
        {data.nota.toFixed(2)}
        <MdStar color="#f9b21b" size={20} />
      </Note>
      <CurriculumTitle>currículo</CurriculumTitle>
      <CurriculumBody>{data.curriculo}</CurriculumBody>
      <Place>
        <FaMapMarkerAlt color="#e3e3e3" size={19} />
        {data.bairro}
      </Place>
      <Button>selecionar</Button>
    </Container>
  )
}
