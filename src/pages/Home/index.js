import React, { useState, useEffect } from 'react'

import { Container } from './styles'
import api from '../../services/api'

export default function Home() {
  const [professors, setProfessors] = useState([])
  useEffect(() => {
    ;(async () => {
      const { data } = await api.get('/professors')
      setProfessors(data)
    })()
  }, [])
  console.log({ professors })
  return (
    <Container>
      <ul>
        {professors.map(({ objectId, nome }) => (
          <li key={objectId}>{nome}</li>
        ))}
      </ul>
    </Container>
  )
}
