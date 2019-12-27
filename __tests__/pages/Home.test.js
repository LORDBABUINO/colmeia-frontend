import React from 'react'
import { render, fireEvent, waitForElement, wait } from '@testing-library/react'

import api from '../../src/services/api'
import Home from '../../src/pages/Home'

jest.mock('../../src/services/api')
describe('Home page', () => {
  beforeAll(() => {
    api.get.mockImplementation(async () => ({ data: [] }))
  })

  afterEach(() => {
    api.get.mockClear()
  })

  it('should have input to attribute "nome"', async () => {
    const { getByLabelText } = render(<Home />)
    const searchInput = await waitForElement(() => getByLabelText('nome'))

    expect(searchInput).toBeTruthy()
  })

  it('should request teachers on load', async () => {
    await wait(() => render(<Home />))
    expect(api.get.mock.calls[0]).toContain('/teachers')
  })

  it('should request teachers that matchs "nome" value on changing it on input', async () => {
    const { getByLabelText } = render(<Home />)
    const searchInput = await waitForElement(() => getByLabelText('nome'))
    const searchTerm = 'banana'

    await wait(() =>
      fireEvent.change(searchInput, { target: { value: searchTerm } })
    )

    expect(api.get).toHaveBeenCalledWith('/teachers', {
      params: { name: searchTerm },
    })
  })
})
