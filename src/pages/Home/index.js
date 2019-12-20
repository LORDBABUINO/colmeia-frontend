import React, { useState, useEffect } from 'react'

import Professor from '../../components/Professor'
import api from '../../services/api'

import { List } from './styles'

export default function Home() {
  const [professors, setProfessors] = useState([])
  useEffect(() => {
    ;(async () => {
      const { data } = await api.get('/professors')
      setProfessors(data)
    })()
  }, [])
  return (
    <List>
      {professors.map(professor => (
        <Professor key={professor.objectId} data={professor} />
      ))}
    </List>
  )
}
