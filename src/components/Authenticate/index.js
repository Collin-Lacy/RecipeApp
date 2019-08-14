import * as React from 'react';
import Props from 'prop-types';

class Authenticate extends React.Component {
  constructor(props) {
    super(props)
    
    this.handleChange = this.handleChange.bind(this)

    this.state = {
      values: this.props.initialValues || {},
    }
  }
  
  handleChange(event) {    
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;	  
    const name = target.name;

    this.setState(prevState => ({
      values: {
        ...prevState.values,
        [name]: value
      }
    }))
  }

  render() {
    return React.cloneElement(this.props.children, {
      state: this.state,
      handleChange: this.handleChange
    })
  }
}
export default Authenticate;
