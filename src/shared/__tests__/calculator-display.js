import React from 'react'
import {render} from 'calculator-test-utils'
import CalculatorDisplay from '../calculator-display'

test('renders', () => {
  const {container, rerender} = render(<CalculatorDisplay value="0" />)
  rerender(<CalculatorDisplay value="1" />)
  expect(container.firstChild).toMatchInlineSnapshot(`
    .emotion-0 {
      position: relative;
      line-height: 130px;
      font-size: 6em;
      -webkit-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }

    <div
      class="emotion-0 emotion-1"
    >
      <div
        class="autoScalingText"
        data-testid="total"
        style="transform: scale(1,1);"
      >
        1
      </div>
    </div>
  `)
})
