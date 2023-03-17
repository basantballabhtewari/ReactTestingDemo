import PropTypes from 'prop-types'
function HomeComponent(props) {
  return (
    <div>
      <input type='text' placeholder="Name" value={props.name} onChange={(e) => props.changeName(e.target.value)} />
      <input type='number' placeholder="age" value={props.age}
        onChange={(e) => props.changeage(parseInt(e.target.value)) } />
    </div>
  )
}


HomeComponent.prototype = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired
}

export default HomeComponent