// import '@testing-library/jest-dom/extend-expect'
import React from 'react'
import { render } from '@testing-library/react'
// import ReactDOM from 'react-dom'
// import { getQueriesForElement } from '@testing-library/dom'
import { FavoriteNumber } from '../favorite-number'

// render from rtl
// function render(ui) {
//   const container = document.createElement('div')
//   ReactDOM.render(ui, container)
//   const queries = getQueriesForElement(container)
//   return {
//     container,
//     ...queries,
//   }
// }

test('renders a number input with a label "Favorite Number"', () => {
  const { getByLabelText, debug } = render(<FavoriteNumber />)
  const input = getByLabelText(/favorite number/i)
  expect(input).toHaveAttribute('type', 'number')
  debug()
  console.log(`prints object being passed as argument`)
  debug(input)
})
