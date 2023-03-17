import React from 'react'

import PropTypes from 'prop-types'

function Testcomponents({name,age}) {
  return (
    <div>
      Name :{name}
      <br></br>
     Age :{age}
    </div>
  )
}


Testcomponents.propTypes={
  name:PropTypes.string.isRequired,
  age:PropTypes.number.isRequired
}

export default Testcomponents
