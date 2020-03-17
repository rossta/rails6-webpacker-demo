import React from 'react'
import PropTypes from 'prop-types'

import partition from "lodash/partition";

const Hello = props => (
  <div style={{backgroundColor: 'lightpink', padding: '1em'}}>
    <div>Hello {props.name}!</div>

    <div>
      One of my favorite lodash functions is partition:

      <pre>
        <code>
          <p>
            _.partition([1, 2, 3, 4], n => n % 2);
          </p>

          <p>
            // -> {JSON.stringify(partition([1, 2, 3, 4], n => n % 2))}
          </p>
        </code>
      </pre>

    </div>
  </div>
)

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: PropTypes.string
}

export default Hello
