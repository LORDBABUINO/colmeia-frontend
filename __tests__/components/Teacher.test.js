import React from 'react'
import { render } from '@testing-library/react'

import Teacher from '../../src/components/Teacher'

describe('Teacher component', () => {
  const teacher = {
    nome: 'test',
    imagem: 'https://www.testphoto.com',
    curriculo: 'lorem ipsum',
    materia: ['matemática', 'história', 'geografia'],
    nota: 1.02,
    bairro: 'rua do leite',
  }

  const testShowString = ({ nome, curriculo, nota, bairro }) => {
    const stringObj = { nome, curriculo, nota: String(nota), bairro }

    Object.keys(stringObj).forEach(key => {
      it(`should show teacher "${key}" property`, () => {
        const { getByText } = render(<Teacher data={teacher} />)
        expect(getByText(stringObj[key])).toBeTruthy()
      })
    })
  }

  testShowString(teacher)

  it(`should show teacher photo`, () => {
    const { getByAltText } = render(<Teacher data={teacher} />)
    expect(getByAltText('Pessoa')).toHaveAttribute('src', teacher.imagem)
  })
})
