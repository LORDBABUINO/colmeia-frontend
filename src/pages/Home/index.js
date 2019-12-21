import React, { useState, useEffect } from 'react'
import { FaSpinner } from 'react-icons/fa'

import Teacher from '../../components/Teacher'
import api from '../../services/api'

import { List, Search, Label } from './styles'

export default function Home() {
  const [teachers, setTeachers] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    ;(async () => {
      setLoading(true)
      const { data } = await api.get('/teachers', {
        params: {
          name: searchTerm,
        },
      })
      setTeachers(data)
      setLoading(false)
    })()
  }, [searchTerm])

  return (
    <>
      <Label>nome</Label>
      <Search
        onChange={({ target: { value } }) => setSearchTerm(value)}
        value={searchTerm}
      />
      <List>
        {loading ? (
          <FaSpinner />
        ) : (
          teachers.map(teacher => (
            <Teacher key={teacher.objectId} data={teacher} />
          ))
        )}
      </List>
    </>
  )
}
