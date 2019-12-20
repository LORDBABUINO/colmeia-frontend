import React, { useState, useEffect } from 'react'
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  function handleResize() {
    setWindowWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Container>
      <Image src={data.imagem} alt="Pessoa" />
      <HeaderDetails>
        <h2>{data.nome}</h2>
        {windowWidth > 768 && (
          <>
            <p>disciplinas:</p>
            <ul>
              {data.materia.map(diciplina => (
                <li>{diciplina}</li>
              ))}
            </ul>
          </>
        )}
      </HeaderDetails>
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
